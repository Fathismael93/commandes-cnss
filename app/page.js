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

      {/* Section Produits les plus commandés */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Produits les Plus Commandés
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez les médicaments et produits pharmaceutiques les plus
            demandés par nos partenaires de santé
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Paracétamol 500mg",
              category: "Antalgique",
              orders: "2,847",
              trend: "+12%",
              color: "from-red-400 to-red-600",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=200&fit=crop",
            },
            {
              name: "Amoxicilline",
              category: "Antibiotique",
              orders: "1,923",
              trend: "+8%",
              color: "from-yellow-400 to-orange-500",
              image:
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
            },
            {
              name: "Vaccin COVID-19",
              category: "Immunologique",
              orders: "1,642",
              trend: "+15%",
              color: "from-purple-400 to-purple-600",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=300&h=200&fit=crop",
            },
            {
              name: "Insuline",
              category: "Diabète",
              orders: "1,234",
              trend: "+6%",
              color: "from-blue-400 to-blue-600",
              image:
                "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=300&h=200&fit=crop",
            },
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="h-32 bg-gray-200 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-3 h-3 bg-gradient-to-br ${product.color} rounded-full shadow-lg`}
                  ></div>
                  <div className="text-right">
                    <div className="text-sm text-green-300 font-medium">
                      {product.trend}
                    </div>
                    <div className="text-xs text-white/70">ce mois</div>
                  </div>
                </div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {product.name}
                </h4>
                <p className="text-blue-200 text-sm mb-3">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {product.orders}
                  </span>
                  <span className="text-xs text-white/70">commandes</span>
                </div>
                <div className="mt-4 w-full bg-white/20 rounded-full h-2">
                  <div
                    className={`h-2 bg-gradient-to-r ${product.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                    style={{ width: `${60 + index * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Catégories de médicaments */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Nos Catégories Pharmaceutiques
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Un catalogue complet organisé selon les standards internationaux de
            classification
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Médicaments Chimiques",
              description:
                "Substances actives d'origine chimique, processus industriels certifiés",
              icon: Package,
              items: [
                "Antalgiques",
                "Anti-inflammatoires",
                "Cardiovasculaires",
              ],
              color: "from-green-500 to-emerald-600",
              count: "1,247",
              image:
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
            },
            {
              title: "Médicaments Biologiques",
              description:
                "Sources biologiques, vaccins, immunoglobulines, biomédicaments",
              icon: Shield,
              items: ["Vaccins", "Dérivés du sang", "Anticorps monoclonaux"],
              color: "from-blue-500 to-cyan-600",
              count: "389",
              image:
                "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=250&fit=crop",
            },
            {
              title: "Médicaments Génériques",
              description: "Alternatives économiques aux médicaments de marque",
              icon: Heart,
              items: ["Copies conformes", "Même efficacité", "Prix réduits"],
              color: "from-purple-500 to-indigo-600",
              count: "856",
              image:
                "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400&h=250&fit=crop",
            },
            {
              title: "Produits Naturels",
              description: "Phytothérapie, vitamines, minéraux et compléments",
              icon: Activity,
              items: ["Plantes médicinales", "Vitamines", "Homéopathie"],
              color: "from-orange-500 to-red-600",
              count: "423",
              image:
                "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=250&fit=crop",
            },
            {
              title: "Stupéfiants Contrôlés",
              description: "Substances réglementées, traçabilité renforcée",
              icon: CheckCircle,
              items: ["Liste I & II", "Ordonnances sécurisées", "Suivi strict"],
              color: "from-gray-500 to-gray-700",
              count: "127",
              image:
                "https://images.unsplash.com/photo-1576671081837-49000212a370?w=400&h=250&fit=crop",
            },
            {
              title: "Formes Galéniques",
              description: "Toutes formes pharmaceutiques disponibles",
              icon: Users,
              items: ["Comprimés", "Injectables", "Topiques"],
              color: "from-teal-500 to-green-600",
              count: "2,847",
              image:
                "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&h=250&fit=crop",
            },
          ].map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-500 group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center shadow-xl`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-white">
                        {category.count}
                      </div>
                      <div className="text-xs text-white/70">produits</div>
                    </div>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">
                    {category.title}
                  </h4>
                  <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                    {category.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-white/80 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl transition-all duration-300 border border-white/20 group-hover:border-white/40">
                    Explorer la catégorie
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Partenaires avec photos */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Nos Partenaires de Confiance
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Un réseau mondial de laboratoires et fournisseurs certifiés pour
            garantir la qualité
          </p>
        </div>

        {/* Partenaires internationaux avec photos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              name: "Sanofi",
              country: "France",
              speciality: "Vaccins & Diabète",
              partnership: "2018",
              logo: "🇫🇷",
              volume: "342 lots",
              image:
                "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=300&h=200&fit=crop",
            },
            {
              name: "Pfizer",
              country: "États-Unis",
              speciality: "Oncologie & Vaccins",
              partnership: "2019",
              logo: "🇺🇸",
              volume: "287 lots",
              image:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
            },
            {
              name: "Roche",
              country: "Suisse",
              speciality: "Diagnostics & Oncologie",
              partnership: "2020",
              logo: "🇨🇭",
              volume: "156 lots",
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
            },
            {
              name: "Novartis",
              country: "Suisse",
              speciality: "Génériques & Innovation",
              partnership: "2021",
              logo: "🇨🇭",
              volume: "198 lots",
              image:
                "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=300&h=200&fit=crop",
            },
          ].map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="h-32 bg-gray-200 overflow-hidden">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 text-center">
                <div className="text-2xl mb-2">{partner.logo}</div>
                <h4 className="text-white font-bold text-lg mb-2">
                  {partner.name}
                </h4>
                <p className="text-blue-200 text-sm mb-2">{partner.country}</p>
                <p className="text-green-300 text-xs mb-4">
                  {partner.speciality}
                </p>
                <div className="flex justify-between text-xs text-white/70 mb-4">
                  <span>Depuis {partner.partnership}</span>
                  <span>{partner.volume}</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-1">
                  <div
                    className="h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full transition-all duration-1000 group-hover:w-full"
                    style={{ width: `${70 + index * 7}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partenaires régionaux avec photos */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h4 className="text-2xl font-bold text-white mb-6 text-center">
            Partenaires Régionaux - Corne de l&apos;Afrique
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "EthioPharm",
                country: "Éthiopie",
                focus: "Médicaments essentiels",
                logo: "🇪🇹",
                image:
                  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=250&h=150&fit=crop",
              },
              {
                name: "Kenya Pharma",
                country: "Kenya",
                focus: "Génériques certifiés",
                logo: "🇰🇪",
                image:
                  "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=250&h=150&fit=crop",
              },
              {
                name: "Sudan Medical",
                country: "Soudan",
                focus: "Urgences sanitaires",
                logo: "🇸🇩",
                image:
                  "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=250&h=150&fit=crop",
              },
            ].map((partner, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="h-24 bg-gray-200 overflow-hidden">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="text-2xl mb-2">{partner.logo}</div>
                  <h5 className="text-white font-semibold">{partner.name}</h5>
                  <p className="text-blue-200 text-sm mb-1">
                    {partner.country}
                  </p>
                  <p className="text-green-300 text-xs">{partner.focus}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Équipe et installations avec photos */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Notre Infrastructure
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Des installations modernes et une équipe d&apos;experts dédiés à
            votre service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Entrepôt Pharmaceutique",
              description:
                "Installation climatisée de 5000m² avec système de traçabilité RFID",
              image:
                "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
              stats: ["5000m²", "Température contrôlée", "Certification GDP"],
            },
            {
              title: "Laboratoire de Contrôle",
              description:
                "Tests de qualité et conformité selon les normes internationales",
              image:
                "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=250&fit=crop",
              stats: [
                "Équipement moderne",
                "Personnel qualifié",
                "Analyses rapides",
              ],
            },
            {
              title: "Centre de Distribution",
              description:
                "Réseau logistique couvrant tout le territoire djiboutien",
              image:
                "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&h=250&fit=crop",
              stats: ["Livraison 24h", "Chaîne du froid", "Géolocalisation"],
            },
          ].map((facility, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 group"
            >
              <div className="h-48 bg-gray-200 overflow-hidden relative">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3">
                  {facility.title}
                </h4>
                <p className="text-blue-200 text-sm mb-4 leading-relaxed">
                  {facility.description}
                </p>
                <div className="space-y-2">
                  {facility.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-white/80 text-sm">{stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section Certifications avec badges visuels */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Certifications & Conformité
            </h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Nos standards de qualité respectent les normes internationales les
              plus strictes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "ISO 9001:2015",
                description: "Management de la qualité",
                icon: "🏆",
                status: "Certifié",
                image:
                  "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
              },
              {
                title: "WHO PQ",
                description: "Préqualification OMS",
                icon: "🌍",
                status: "Validé",
                image:
                  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=200&fit=crop",
              },
              {
                title: "GMP/BPF",
                description: "Bonnes Pratiques de Fabrication",
                icon: "⚗️",
                status: "Conforme",
                image:
                  "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=200&h=200&fit=crop",
              },
              {
                title: "GDP/BPD",
                description: "Bonnes Pratiques de Distribution",
                icon: "🚚",
                status: "Certifié",
                image:
                  "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=200&h=200&fit=crop",
              },
            ].map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden border-4 border-white/20 group-hover:border-green-400/50 transition-all duration-300">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                </div>
                <h4 className="text-white font-bold mb-2">{cert.title}</h4>
                <p className="text-blue-200 text-sm mb-3">{cert.description}</p>
                <div className="inline-block bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium border border-green-400/30">
                  {cert.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section Témoignages avec photos */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Témoignages de nos Partenaires
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            La confiance de nos clients professionnels témoigne de notre
            excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Amina Hassan",
              role: "Directrice, Hôpital Général de Djibouti",
              testimonial:
                "CNSS Pharma nous garantit un approvisionnement fiable et de qualité. Leur réactivité en situation d'urgence est remarquable.",
              avatar:
                "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
              rating: 5,
            },
            {
              name: "Pharmacien Omar Abdillahi",
              role: "Pharmacie Centrale, Balbala",
              testimonial:
                "Le système de commande en ligne est intuitif et sécurisé. Les délais de livraison sont toujours respectés.",
              avatar:
                "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=100&h=100&fit=crop&crop=face",
              rating: 5,
            },
            {
              name: "Dr. Khadija Mohamed",
              role: "Médecin-Chef, Centre de Santé Ali Sabieh",
              testimonial:
                "La traçabilité des médicaments et la conformité réglementaire nous donnent une totale confiance dans nos approvisionnements.",
              avatar:
                "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=100&h=100&fit=crop&crop=face",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-green-400/50">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  <div className="flex space-x-1 mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ⭐
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-blue-100 italic leading-relaxed">
                &quot;{testimonial.testimonial}&quot;
              </p>
            </div>
          ))}
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
