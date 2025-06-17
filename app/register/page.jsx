"use client";

import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  Shield,
  CheckCircle,
  AlertCircle,
  UserPlus,
  LogIn,
} from "lucide-react";
import Link from "next/link";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear errors when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Validation du nom
    if (!formData.name.trim()) {
      newErrors.name = "Le nom complet est requis";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Le nom doit contenir au moins 2 caractères";
    }

    // Validation de l'email
    if (!formData.email) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    // Validation du téléphone
    if (!formData.phone) {
      newErrors.phone = "Le numéro de téléphone est requis";
    } else if (
      !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Format de téléphone invalide";
    }

    // Validation du mot de passe
    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Le mot de passe doit contenir au moins 8 caractères";
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
      newErrors.password =
        "Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre";
    }

    // Validation de la confirmation du mot de passe
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Veuillez confirmer le mot de passe";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    }

    // Validation des conditions
    if (!formData.acceptTerms) {
      newErrors.acceptTerms =
        "Vous devez accepter les conditions d'utilisation";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulation d'inscription
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        router.push("/login");
      }
    } catch (error) {
      setErrors({
        general: "Erreur lors de l'inscription. Veuillez réessayer.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Page d'inscription */}
      <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-md w-full space-y-8">
          {/* En-tête */}
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl">
                <UserPlus className="w-10 h-10 text-white" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Créer un Compte
            </h2>
            <p className="text-blue-100">Rejoignez la plateforme CNSS Pharma</p>
          </div>

          {/* Formulaire d'inscription */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Message d'erreur général */}
            {errors.general && (
              <div className="mb-6 p-4 bg-red-500/20 border border-red-400/30 rounded-xl flex items-center space-x-3">
                <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                <span className="text-red-200 text-sm">{errors.general}</span>
              </div>
            )}

            <div className="space-y-6">
              {/* Champ Nom complet */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nom complet
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pl-12 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none transition-colors ${
                      errors.name
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-green-400"
                    }`}
                    placeholder="Votre nom complet"
                  />
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>
                {errors.name && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Champ Email */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Adresse email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pl-12 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none transition-colors ${
                      errors.email
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-green-400"
                    }`}
                    placeholder="votre@email.com"
                  />
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>
                {errors.email && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Champ Téléphone */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Numéro de téléphone
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pl-12 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none transition-colors ${
                      errors.phone
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-green-400"
                    }`}
                    placeholder="+253 77 XX XX XX"
                  />
                  <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                </div>
                {errors.phone && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Champ Mot de passe */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Lock className="w-4 h-4 inline mr-2" />
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pl-12 pr-12 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none transition-colors ${
                      errors.password
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-green-400"
                    }`}
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.password}
                  </p>
                )}
              </div>

              {/* Champ Confirmation mot de passe */}
              <div>
                <label className="block text-white font-medium mb-2">
                  <Lock className="w-4 h-4 inline mr-2" />
                  Confirmer le mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pl-12 pr-12 bg-white/10 border rounded-xl text-white placeholder-white/50 focus:outline-none transition-colors ${
                      errors.confirmPassword
                        ? "border-red-400 focus:border-red-400"
                        : "border-white/20 focus:border-green-400"
                    }`}
                    placeholder="••••••••"
                  />
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white transition-colors"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.confirmPassword && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.confirmPassword}
                  </p>
                )}
              </div>

              {/* Acceptation des conditions */}
              <div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    id="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-green-500 bg-white/10 border border-white/20 rounded focus:ring-green-400"
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="ml-3 text-white text-sm"
                  >
                    J'accepte les{" "}
                    <Link
                      href="/terms"
                      className="text-green-300 hover:text-green-200 transition-colors"
                    >
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link
                      href="/privacy"
                      className="text-green-300 hover:text-green-200 transition-colors"
                    >
                      politique de confidentialité
                    </Link>
                  </label>
                </div>
                {errors.acceptTerms && (
                  <p className="mt-2 text-red-400 text-sm flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.acceptTerms}
                  </p>
                )}
              </div>

              {/* Bouton d'inscription */}
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3 group font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Création en cours...</span>
                  </>
                ) : (
                  <>
                    <UserPlus className="w-5 h-5" />
                    <span>Créer mon compte</span>
                    <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Lien de connexion */}
          <div className="text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <p className="text-blue-100 mb-4">Vous avez déjà un compte ?</p>
              <Link
                href="/login"
                className="inline-flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 group"
              >
                <LogIn className="w-5 h-5" />
                <span className="font-medium">Se connecter</span>
                <div className="w-1 h-1 bg-white rounded-full group-hover:animate-pulse"></div>
              </Link>
            </div>
          </div>

          {/* Critères de sécurité du mot de passe */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h3 className="text-white font-semibold mb-4 flex items-center">
              <Shield className="w-5 h-5 mr-2 text-green-400" />
              Critères de Sécurité
            </h3>
            <div className="space-y-3">
              {[
                "Au moins 8 caractères",
                "Une majuscule et une minuscule",
                "Au moins un chiffre",
                "Données chiffrées et sécurisées",
              ].map((criterion, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-blue-200 text-sm">{criterion}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="text-center">
            <p className="text-blue-200 text-sm">
              Besoin d'aide ?{" "}
              <Link
                href="/contact"
                className="text-green-300 hover:text-green-200 transition-colors"
              >
                Contactez notre support
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
