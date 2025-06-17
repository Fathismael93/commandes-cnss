import mongoose from "mongoose";
import logger from "@/utils/logger";
import { captureException } from "@/monitoring/sentry";

/**
 * Schéma détaillé pour les produits dans une commande
 * Stocke toutes les informations nécessaires pour référence historique
 */
const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    required: [true, "ID du produit obligatoire"],
    ref: "Product",
    index: true,
  },
  name: {
    type: String,
    required: [true, "Nom du produit obligatoire"],
    trim: true,
    maxlength: [100, "Le nom ne peut pas dépasser 100 caractères"],
  },
  category: {
    type: String,
    required: [true, "Catégorie obligatoire"],
    trim: true,
  },
  quantity: {
    type: Number,
    required: [true, "Quantité obligatoire"],
    min: [1, "La quantité minimum est 1"],
    validate: {
      validator: Number.isInteger,
      message: "La quantité doit être un nombre entier",
    },
  },
  image: {
    type: String,
    required: [true, "Image obligatoire"],
  },
  price: {
    type: Number,
    required: [true, "Prix unitaire obligatoire"],
    min: [0, "Le prix ne peut pas être négatif"],
    set: (val) => Math.round(val * 100) / 100, // Arrondir à 2 décimales
  },
  subtotal: {
    type: Number,
    required: true,
    min: [0, "Le sous-total ne peut pas être négatif"],
    set: (val) => Math.round(val * 100) / 100, // Arrondir à 2 décimales
  },
});

/**
 * Schéma de commande complet avec validation, indexation et relations
 */
const orderSchema = new mongoose.Schema(
  {
    orderNumber: {
      type: String,
      unique: true,
      index: true,
      // Généré automatiquement à la création
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, "Utilisateur obligatoire"],
      ref: "User",
      index: true,
    },
    orderItems: [orderItemSchema],
    paymentStatus: {
      type: String,
      enum: {
        values: ["unpaid", "processing", "paid", "refunded", "failed"],
        message: "Statut de paiement non valide: {VALUE}",
      },
      default: "unpaid",
      index: true,
    },
    orderStatus: {
      type: String,
      enum: {
        values: ["Processing", "Shipped", "Delivered", "Cancelled"],
        message: "Statut de commande non valide: {VALUE}",
      },
      default: "Processing",
      index: true,
    },
    totalAmount: {
      type: Number,
      required: true,
      min: [0, "Le montant total ne peut pas être négatif"],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true,
      index: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: {
      updatedAt: "updatedAt",
      createdAt: false, // On utilise notre propre champ createdAt
    },
  }
);

// Indexer pour les requêtes fréquentes
orderSchema.index({ user: 1, createdAt: -1 });
orderSchema.index({ orderStatus: 1 });
orderSchema.index({ createdAt: -1 });

// Créer un identifiant unique au format ORD-YYYYMMDD-XXXXX
orderSchema.pre("save", async function (next) {
  if (this.isNew) {
    try {
      const date = new Date();
      const datePart = date.toISOString().slice(0, 10).replace(/-/g, "");

      // Trouver le dernier numéro de commande pour aujourd'hui
      const lastOrder = await this.constructor
        .findOne(
          {
            orderNumber: new RegExp(`ORD-${datePart}-\\d+`),
          },
          { orderNumber: 1 }
        )
        .sort({ orderNumber: -1 });

      let sequence = 1;
      if (lastOrder && lastOrder.orderNumber) {
        const lastSequence = parseInt(
          lastOrder.orderNumber.split("-")[2] || "0"
        );
        sequence = lastSequence + 1;
      }

      // Formater avec padding à 5 chiffres (00001)
      this.orderNumber = `ORD-${datePart}-${sequence
        .toString()
        .padStart(5, "0")}`;
    } catch (error) {
      logger.error("Erreur lors de la génération du numéro de commande", {
        error: error.message,
        userId: this.user,
      });

      // Fallback si la génération du numéro échoue - utiliser un timestamp unique
      const timestamp = Date.now().toString();
      this.orderNumber = `ORD-${timestamp.substring(
        0,
        8
      )}-${timestamp.substring(8)}`;
    }

    // Calculer automatiquement le sous-total pour chaque article
    if (this.orderItems && this.orderItems.length > 0) {
      this.orderItems.forEach((item) => {
        if (!item.subtotal) {
          item.subtotal = item.price * item.quantity;
        }
      });
    }
  }

  // Mettre à jour le champ updatedAt
  this.updatedAt = Date.now();
  next();
});

// Méthode pour calculer le total de la commande
orderSchema.methods.calculateTotal = function () {
  const itemsTotal = this.orderItems.reduce(
    (sum, item) => sum + item.total * item.quantity,
    0
  );
  return itemsTotal;
};

// Méthode statique pour trouver les commandes d'un utilisateur
orderSchema.statics.findByUser = function (userId, limit = 10, page = 1) {
  const skip = (page - 1) * limit;
  return this.find({ user: userId })
    .select("-__v")
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit)
    .lean();
};

// Méthode statique pour trouver les commandes récentes
orderSchema.statics.findRecent = function (limit = 20) {
  return this.find()
    .sort({ createdAt: -1 })
    .limit(limit)
    .populate("user", "name email")
    .lean();
};

// Gestion optimisée du modèle avec vérification pour éviter les redéfinitions
const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);

export default Order;
