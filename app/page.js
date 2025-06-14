"use client";

import { useEffect, useState } from "react";
import {
  ChevronDown,
  Play,
  Shield,
  Users,
  Activity,
  Package,
  Heart,
  Clock,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [heartRate, setHeartRate] = useState(72);

  // Animation du rythme cardiaque
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => 70 + Math.sin(Date.now() / 1000) * 5);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

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
        {[...Array(20)].map((_, i) => (
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

      {/* Navigation */}
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

            {/* Menu Desktop */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                Accueil
              </a>
              <div className="relative group">
                <button className="flex items-center text-white hover:text-green-300 transition-colors">
                  Commandes
                  <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-green-50 rounded-t-lg"
                  >
                    Nouvelle commande
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-green-50"
                  >
                    Historique
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-3 text-gray-800 hover:bg-green-50 rounded-b-lg"
                  >
                    Suivi
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                Catalogue
              </a>
              <a
                href="#"
                className="text-white hover:text-green-300 transition-colors"
              >
                Support
              </a>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                Connexion
              </button>
            </div>

            {/* Menu Mobile */}
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-around">
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
                <span className="w-full h-0.5 bg-white"></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            {/* Indicateurs de statut */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">Système sécurisé</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
                <Shield className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white">
                  Conformité réglementaire
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Votre Partenaire
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Pharmaceutique
                </span>
                <span className="block">de Confiance</span>
              </h2>

              <p className="text-xl text-blue-100 leading-relaxed mb-8">
                &quot;La santé de nos assurés est notre priorité absolue. Avec
                CNSS Pharma, nous garantissons un approvisionnement sûr, rapide
                et conforme aux standards internationaux les plus exigeants.
                Votre confiance guide chaque décision.&quot;
                <span className="block mt-4 text-lg text-green-300 font-medium">
                  - Direction Générale CNSS
                </span>
              </p>
            </div>

            {/* Boutons d'action */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 group">
                <span className="font-semibold">Commencer</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:animate-ping"></div>
              </button>

              <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-3 group">
                <Play className="w-5 h-5 text-blue-300" />
                <span className="font-semibold">Découvrir nos services</span>
              </button>
            </div>
          </div>

          {/* Section visuelle droite */}
          <div className="relative">
            {/* Indicateurs médicaux */}
            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 z-20">
              <div className="flex items-center space-x-3">
                <Heart className="w-5 h-5 text-red-400" />
                <div>
                  <p className="text-xs text-white/70">Monitoring système</p>
                  <p className="text-lg font-bold text-white">
                    {Math.round(heartRate)} bpm
                  </p>
                </div>
              </div>
              <div className="mt-3 h-16 flex items-end space-x-1">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="w-2 bg-gradient-to-t from-green-500 to-blue-400 rounded-full animate-pulse"
                    style={{
                      height: `${20 + Math.sin(Date.now() / 1000 + i) * 20}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Indicateur de livraisons */}
            <div className="absolute top-1/3 left-8 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 z-20">
              <div className="flex items-center space-x-3">
                <Package className="w-5 h-5 text-green-400" />
                <div>
                  <p className="text-xs text-white/70">Livraisons actives</p>
                  <p className="text-lg font-bold text-white">24/7</p>
                </div>
              </div>
            </div>

            {/* Indicateur d'utilisateurs */}
            <div className="absolute bottom-1/4 right-4 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20 z-20">
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-blue-400" />
                <div>
                  <p className="text-xs text-white/70">Assurés couverts</p>
                  <p className="text-lg font-bold text-white">500K+</p>
                </div>
              </div>
            </div>

            {/* Grille de données médicales */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="grid grid-cols-8 gap-2 opacity-30">
                {[...Array(64)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 h-3 rounded-sm ${
                      Math.random() > 0.7
                        ? "bg-green-400"
                        : Math.random() > 0.5
                        ? "bg-blue-400"
                        : "bg-white/20"
                    }`}
                    style={{
                      animationDelay: `${Math.random() * 3}s`,
                    }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Figure principale - Pharmacien/Médecin stylisé */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/30 to-blue-500/30 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
                <div className="w-48 h-48 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <Shield className="w-16 h-16 mx-auto mb-4" />
                    <p className="text-lg font-bold">CNSS</p>
                    <p className="text-sm opacity-90">Sécurité Garantie</p>
                  </div>
                </div>
              </div>

              {/* Orbites d'éléments */}
              <div
                className="absolute inset-0 animate-spin"
                style={{ animationDuration: "20s" }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
                  <div className="w-6 h-6 bg-green-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
                  <div className="w-6 h-6 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2">
                  <div className="w-6 h-6 bg-white/60 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2">
                  <div className="w-6 h-6 bg-green-300 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>

            {/* Lignes de connexion */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <defs>
                <linearGradient
                  id="connectionGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="rgb(34, 197, 94)"
                    stopOpacity="0.3"
                  />
                  <stop
                    offset="100%"
                    stopColor="rgb(59, 130, 246)"
                    stopOpacity="0.3"
                  />
                </linearGradient>
              </defs>
              <path
                d="M100,100 Q200,50 300,100 T500,100"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
              />
              <path
                d="M50,200 Q150,150 250,200 T450,200"
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                fill="none"
                className="animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Menu mobile overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-blue-900/95 backdrop-blur-md md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a
              href="#"
              className="text-2xl text-white hover:text-green-300 transition-colors"
            >
              Accueil
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-green-300 transition-colors"
            >
              Commandes
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-green-300 transition-colors"
            >
              Catalogue
            </a>
            <a
              href="#"
              className="text-2xl text-white hover:text-green-300 transition-colors"
            >
              Support
            </a>
            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full text-xl">
              Connexion
            </button>
            <button
              className="absolute top-8 right-8 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
