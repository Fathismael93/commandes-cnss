"use client";

import React, { useState } from "react";
import {
  ShoppingCart,
  Plus,
  Minus,
  Trash2,
  ArrowLeft,
  Package,
  CreditCard,
  CheckCircle,
  MapPin,
  Calendar,
  User,
} from "lucide-react";
import Link from "next/link";
import { allProducts, bigCart } from "@/data/products_pharma_final";

const Cart = ({ cart = bigCart || {}, updateCart, removeFromCart }) => {
  const [orderForm, setOrderForm] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    deliveryAddress: "",
    deliveryDate: "",
    notes: "",
  });
  const [isOrdering, setIsOrdering] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  // Récupérer les produits du panier avec leurs détails
  const cartItems = Object.entries(cart)
    .map(([productId, quantity]) => {
      const product = allProducts.find((p) => p.id === parseInt(productId));
      return product ? { ...product, quantity } : null;
    })
    .filter(Boolean);

  // Calculer les totaux
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCart(productId, newQuantity);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setOrderForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleOrder = async () => {
    if (
      !orderForm.clientName ||
      !orderForm.clientEmail ||
      !orderForm.deliveryAddress
    ) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsOrdering(true);

    try {
      // Simulation de commande
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setOrderSuccess(true);

      // Vider le panier après commande réussie
      Object.keys(cart).forEach((productId) => {
        removeFromCart(parseInt(productId));
      });

      // Reset form
      setOrderForm({
        clientName: "",
        clientEmail: "",
        clientPhone: "",
        deliveryAddress: "",
        deliveryDate: "",
        notes: "",
      });
    } catch (error) {
      alert("Erreur lors de la commande. Veuillez réessayer.");
    } finally {
      setIsOrdering(false);
    }
  };

  if (orderSuccess) {
    return (
      <div className="min-h-screen pt-16 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Commande Confirmée !
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Votre commande a été enregistrée avec succès. Vous recevrez un
              email de confirmation sous peu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/catalogue"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold"
              >
                Continuer mes achats
              </Link>
              <button
                onClick={() => setOrderSuccess(false)}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold"
              >
                Nouvelle commande
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="flex items-center space-x-4 mb-8">
          <Link
            href="/catalogue"
            className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-6 h-6 text-white" />
          </Link>
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Mon Panier
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                Pharmaceutique
              </span>
            </h2>
            <p className="text-blue-100 mt-2">
              {totalItems} article{totalItems > 1 ? "s" : ""} -{" "}
              {totalPrice.toLocaleString()} FDJ
            </p>
          </div>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingCart className="w-24 h-24 text-white/30 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Votre panier est vide
            </h3>
            <p className="text-blue-200 mb-8">
              Découvrez notre catalogue et ajoutez des produits à votre panier
            </p>
            <Link
              href="/catalogue"
              className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold inline-flex items-center space-x-2"
            >
              <Package className="w-5 h-5" />
              <span>Explorer le catalogue</span>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Liste des produits */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <ShoppingCart className="w-6 h-6 mr-3" />
                  Articles sélectionnés ({totalItems})
                </h3>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white/5 rounded-2xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
                          <img
                            src={item.imageURL}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-white font-bold text-lg mb-1">
                            {item.name}
                          </h4>
                          <p className="text-blue-200 text-sm mb-2">
                            {item.manufacturer} • {item.category}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-xl font-bold text-white">
                              {item.price.toLocaleString()} FDJ
                            </span>
                            <span className="text-white/70 text-sm">
                              Stock: {item.stock}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="flex items-center bg-white/10 rounded-xl p-2">
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity - 1)
                              }
                              className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-white font-medium mx-4 min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, item.quantity + 1)
                              }
                              disabled={item.quantity >= item.stock}
                              className="w-8 h-8 bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>

                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="w-10 h-10 bg-red-500/20 hover:bg-red-500/40 text-red-400 rounded-xl flex items-center justify-center transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-white/10 flex justify-between items-center">
                        <span className="text-blue-200">Sous-total:</span>
                        <span className="text-xl font-bold text-green-300">
                          {(item.price * item.quantity).toLocaleString()} FDJ
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Résumé et commande */}
            <div className="space-y-6">
              {/* Résumé de la commande */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6">
                  Résumé de la commande
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-blue-200">
                      Articles ({totalItems})
                    </span>
                    <span className="text-white font-medium">
                      {totalPrice.toLocaleString()} FDJ
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-blue-200">Livraison</span>
                    <span className="text-green-300 font-medium">Gratuite</span>
                  </div>

                  <div className="border-t border-white/20 pt-4">
                    <div className="flex justify-between">
                      <span className="text-xl font-bold text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-green-300">
                        {totalPrice.toLocaleString()} FDJ
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulaire de commande */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Informations de commande
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="clientName"
                      value={orderForm.clientName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="clientEmail"
                      value={orderForm.clientEmail}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="clientPhone"
                      value={orderForm.clientPhone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="+253 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Adresse de livraison *
                    </label>
                    <textarea
                      name="deliveryAddress"
                      value={orderForm.deliveryAddress}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors resize-none"
                      placeholder="Adresse complète de livraison"
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Date de livraison souhaitée
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={orderForm.deliveryDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Notes (optionnel)
                    </label>
                    <textarea
                      name="notes"
                      value={orderForm.notes}
                      onChange={handleInputChange}
                      rows="2"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors resize-none"
                      placeholder="Instructions spéciales..."
                    ></textarea>
                  </div>
                </div>

                <button
                  onClick={handleOrder}
                  disabled={isOrdering || cartItems.length === 0}
                  className="w-full mt-6 bg-gradient-to-r from-green-500 to-blue-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 font-semibold text-lg"
                >
                  {isOrdering ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Commande en cours...</span>
                    </>
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      <span>Commander - {totalPrice.toLocaleString()} FDJ</span>
                    </>
                  )}
                </button>
              </div>

              {/* Informations de livraison */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h4 className="text-white font-semibold mb-4 flex items-center">
                  <Package className="w-5 h-5 mr-2 text-green-400" />
                  Informations de livraison
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-200">
                      Livraison gratuite à Djibouti
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-200">
                      Délai de livraison: 24-48h
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-200">
                      Chaîne du froid garantie
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-blue-200">Traçabilité complète</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
