import mongoose from "mongoose";
import bcrypt from "bcryptjs";

/**
 * Schéma utilisateur avancé avec validation, indexation et méthodes d'instance
 */
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name"],
      trim: true,
      maxLength: [50, "Name cannot exceed 50 characters"],
      minLength: [2, "Name should have at least 2 characters"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      trim: true,
      lowercase: true, // Stocke toujours en minuscules pour éviter les doublons
      maxLength: [100, "Email cannot exceed 100 characters"],
    },
    phone: {
      type: String,
      required: [true, "Please enter your mobile number"],
      trim: true,
    },
    // Modification de la validation du mot de passe dans le schéma
    password: {
      type: String,
      required: [true, "Please enter your password"],
      minLength: [8, "Password must be at least 8 characters"],
      maxLength: [100, "Password cannot exceed 100 characters"],
      select: false, // Ne pas inclure par défaut dans les requêtes
    },
    createdAt: {
      type: Date,
      default: Date.now,
      immutable: true, // Une fois défini, ne peut plus être modifié
    },
  },
  {
    timestamps: {
      updatedAt: "updatedAt", // Met à jour automatiquement updatedAt
      createdAt: false, // Utilise notre champ createdAt personnalisé
    },
  }
);

// Gestion optimisée du modèle avec vérification pour éviter les redéfinitions
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
