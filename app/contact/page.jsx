"use client";

import React, { useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  User,
  MessageSquare,
  Send,
  AlertCircle,
  Package,
  Shield,
  CheckCircle,
  Activity,
} from "lucide-react";

const CNSSContactPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    sujet: "",
    message: "",
    urgence: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-800 relative overflow-hidden">
      {/* Éléments de fond décoratifs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border border-green-300/30 rounded-full"></div>
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-blue-300/40 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400/20 rounded-full"></div>
      </div>

      {/* Particules flottantes */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Navigation simplifiée */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Package className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">CNSS PHARMA</h1>
                <p className="text-xs text-green-200">Sécurité & Confiance</p>
              </div>
            </div>

            {/* Liens de navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                ← Retour à l'accueil
              </a>
              <a
                href="#"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Contactez
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              CNSS Pharma
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Notre équipe est à votre disposition pour répondre à toutes vos
            questions concernant vos commandes pharmaceutiques et vos besoins en
            santé.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-8">
            {/* Contact principal */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Contact Principal
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Téléphone</p>
                    <a
                      href="tel:+25321350321"
                      className="text-blue-200 hover:text-white transition-colors text-lg"
                    >
                      +253 21 35 03 21
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Adresse</p>
                    <p className="text-blue-200">
                      Boulevard de la République
                      <br />
                      Djibouti BP 696
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Heures de travail
                    </p>
                    <p className="text-blue-200">Dim – Jeu : 08:00 – 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact urgence */}
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/30 backdrop-blur-md rounded-3xl p-8 border border-red-400/30">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">
                  Contact Urgence
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="w-5 h-5 text-red-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Urgence centre soins 1
                    </p>
                    <a
                      href="tel:+25321250697"
                      className="text-red-200 hover:text-white transition-colors text-lg"
                    >
                      +253 21 25 06 97
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Activity className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">
                      Laboratoires Centre de soins 1
                    </p>
                    <a
                      href="tel:+25321331865"
                      className="text-orange-200 hover:text-white transition-colors text-lg"
                    >
                      +253 21 33 18 65
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-5 h-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Disponibilité</p>
                    <p className="text-yellow-200">24H/24 : 7J/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services disponibles */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">
                Services Disponibles
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Package,
                    label: "Commandes",
                    color: "text-green-400",
                  },
                  {
                    icon: Shield,
                    label: "Support technique",
                    color: "text-blue-400",
                  },
                  {
                    icon: CheckCircle,
                    label: "Suivi livraisons",
                    color: "text-purple-400",
                  },
                  {
                    icon: Activity,
                    label: "Urgences médicales",
                    color: "text-red-400",
                  },
                ].map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-xl"
                    >
                      <Icon className={`w-5 h-5 ${service.color}`} />
                      <span className="text-white text-sm">
                        {service.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                Envoyez-nous un message
              </h3>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  Message envoyé !
                </h4>
                <p className="text-blue-200">
                  Nous vous répondrons dans les plus brefs délais.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <User className="w-4 h-4 inline mr-2" />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-400 transition-colors"
                      placeholder="+253 XX XX XX XX"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Sujet *
                    </label>
                    <select
                      name="sujet"
                      value={formData.sujet}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                    >
                      <option value="" className="bg-gray-800">
                        Sélectionnez un sujet
                      </option>
                      <option value="commande" className="bg-gray-800">
                        Nouvelle commande
                      </option>
                      <option value="suivi" className="bg-gray-800">
                        Suivi de commande
                      </option>
                      <option value="support" className="bg-gray-800">
                        Support technique
                      </option>
                      <option value="urgence" className="bg-gray-800">
                        Urgence médicale
                      </option>
                      <option value="autre" className="bg-gray-800">
                        Autre
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-blue-400 transition-colors resize-none"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="urgence"
                    id="urgence"
                    checked={formData.urgence}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-red-500 bg-white/10 border border-white/20 rounded focus:ring-red-400"
                  />
                  <label
                    htmlFor="urgence"
                    className="text-white flex items-center"
                  >
                    <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                    Demande urgente
                  </label>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group font-semibold"
                >
                  <Send className="w-5 h-5" />
                  <span>Envoyer le message</span>
                  <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Carte et informations supplémentaires */}
        <div className="mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Notre Localisation
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Placeholder pour la carte */}
              <div className="bg-white/10 rounded-2xl h-64 flex items-center justify-center border border-white/20">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-white font-semibold">Carte Interactive</p>
                  <p className="text-blue-200 text-sm">
                    Boulevard de la République, Djibouti
                  </p>
                </div>
              </div>

              {/* Informations de transport */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">
                  Comment nous trouver
                </h4>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">En voiture</p>
                      <p className="text-blue-200 text-sm">
                        Parking disponible sur site
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Transport public</p>
                      <p className="text-blue-200 text-sm">
                        Arrêt de bus "République" à 100m
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <p className="text-white font-medium">Accès handicapés</p>
                      <p className="text-blue-200 text-sm">
                        Entrée adaptée disponible
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNSSContactPage;
