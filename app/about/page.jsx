import React, { useState, useEffect } from "react";
import {
  Package,
  Shield,
  Users,
  Activity,
  Clock,
  CheckCircle,
  Award,
  TrendingUp,
  Heart,
  Building,
  Star,
  Calendar,
} from "lucide-react";

const CNSSAboutPage = () => {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    years: 0,
    patients: 0,
    medications: 0,
    centers: 0,
  });

  // Animation des chiffres
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = {
      years: 70,
      patients: 380000,
      medications: 1001,
      centers: 4,
    };

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setAnimatedNumbers({
        years: Math.floor(targets.years * progress),
        patients: Math.floor(targets.patients * progress),
        medications: Math.floor(targets.medications * progress),
        centers: Math.floor(targets.centers * progress),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedNumbers(targets);
      }
    }, interval);

    return () => clearInterval(timer);
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
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        <div className="text-center mb-20">
          <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              70 Ans
            </span>
            <span className="block">d'Excellence Pharmaceutique</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Depuis 1954, la CNSS de Djibouti transforme l'accès aux soins et aux
            médicaments. CNSS Pharma s'inscrit dans cette tradition d'innovation
            pour révolutionner l'approvisionnement pharmaceutique en gros.
          </p>
        </div>

        {/* Chiffres clés animés */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {[
            {
              icon: Calendar,
              number: animatedNumbers.years,
              suffix: " ans",
              label: "d'expertise",
              color: "from-green-500 to-emerald-600",
            },
            {
              icon: Users,
              number: animatedNumbers.patients,
              suffix: "+",
              label: "patients couverts",
              color: "from-blue-500 to-cyan-600",
            },
            {
              icon: Package,
              number: animatedNumbers.medications,
              suffix: "",
              label: "médicaments référencés",
              color: "from-purple-500 to-indigo-600",
            },
            {
              icon: Building,
              number: animatedNumbers.centers,
              suffix: "",
              label: "centres de soins",
              color: "from-orange-500 to-red-600",
            },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 text-center hover:bg-white/15 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number.toLocaleString()}
                  {stat.suffix}
                </div>
                <p className="text-blue-200">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Histoire */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">Notre Histoire</h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Une évolution constante au service de la santé publique djiboutienne
          </p>
        </div>

        <div className="space-y-12">
          {[
            {
              year: "1954",
              title: "Création de la Caisse Nationale de Retraite",
              description:
                "Première institution de protection sociale à Djibouti, posant les bases de notre expertise en gestion de systèmes de santé complexes.",
              icon: Shield,
              color: "from-blue-500 to-cyan-600",
            },
            {
              year: "2005",
              title: "Lancement de Djibpharma",
              description:
                "Premier laboratoire pharmaceutique djiboutien, production de solutés injectables selon les standards européens en partenariat avec le laboratoire Aguettant.",
              icon: Activity,
              color: "from-green-500 to-emerald-600",
            },
            {
              year: "2008",
              title: "Naissance de la CNSS moderne",
              description:
                "Fusion des institutions de protection sociale créant la CNSS actuelle, centralisant l'expertise en assurance maladie et retraite.",
              icon: Building,
              color: "from-purple-500 to-indigo-600",
            },
            {
              year: "2014",
              title: "Gestion de l'Assurance Maladie Universelle",
              description:
                "Prise en charge de l'AMU couvrant 380 000 personnes avec 1001 médicaments remboursés, démontrant notre capacité de gestion pharmaceutique à grande échelle.",
              icon: Heart,
              color: "from-red-500 to-pink-600",
            },
            {
              year: "2025",
              title: "CNSS Pharma - Révolution digitale",
              description:
                "Lancement de la plateforme de commande en gros, synthèse de 70 ans d'expertise pour optimiser l'approvisionnement pharmaceutique régional.",
              icon: Package,
              color: "from-orange-500 to-amber-600",
            },
          ].map((milestone, index) => {
            const Icon = milestone.icon;
            return (
              <div key={index} className="flex items-start space-x-8 group">
                <div className="flex-shrink-0">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-3xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-3xl font-bold text-green-400">
                        {milestone.year}
                      </span>
                      <div className="h-0.5 bg-gradient-to-r from-green-400 to-blue-400 flex-grow"></div>
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-4">
                      {milestone.title}
                    </h4>
                    <p className="text-blue-200 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Mission & Valeurs */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Notre Mission</h3>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed mb-6">
              Faciliter l'accès aux médicaments essentiels en optimisant la
              chaîne d'approvisionnement pharmaceutique, dans la continuité de
              notre mission historique de protection sociale pour tous les
              Djiboutiens.
            </p>
            <div className="space-y-4">
              {[
                "Démocratiser l'accès aux médicaments",
                "Optimiser les coûts d'approvisionnement",
                "Garantir la qualité et la traçabilité",
                "Renforcer la souveraineté sanitaire",
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white">{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Valeurs */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-8">Nos Valeurs</h3>
            {[
              {
                icon: Shield,
                title: "Excellence Médicale",
                description:
                  "Standards internationaux dans tous nos processus pharmaceutiques",
                color: "from-blue-500 to-cyan-600",
              },
              {
                icon: Users,
                title: "Accessibilité Universelle",
                description:
                  "Égalité d'accès aux médicaments pour tous les acteurs de santé",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: Activity,
                title: "Innovation Technologique",
                description:
                  "Digitalisation et modernisation des processus d'approvisionnement",
                color: "from-purple-500 to-indigo-600",
              },
              {
                icon: Award,
                title: "Souveraineté Sanitaire",
                description: "Autonomie pharmaceutique nationale et régionale",
                color: "from-orange-500 to-red-600",
              },
            ].map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {value.title}
                      </h4>
                      <p className="text-blue-200">{value.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Section Expertise */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold text-white mb-4">
            Notre Expertise Unique
          </h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Une maîtrise complète de la chaîne pharmaceutique, de la production
            à la distribution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Production Pharmaceutique",
              subtitle: "Djibpharma - Premier laboratoire national",
              icon: Package,
              color: "from-green-500 to-emerald-600",
              features: [
                "Solutés injectables",
                "Standards européens",
                "Partenariat Aguettant",
                "16 ans d'expérience",
              ],
              image:
                "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
            },
            {
              title: "Gestion AMU",
              subtitle: "380 000 personnes couvertes",
              icon: Shield,
              color: "from-blue-500 to-cyan-600",
              features: [
                "1001 médicaments",
                "Tiers-payant",
                "70-90% remboursement",
                "11 ans d'expertise",
              ],
              image:
                "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
            },
            {
              title: "Infrastructure de Soins",
              subtitle: "Réseau intégré national",
              icon: Building,
              color: "from-purple-500 to-indigo-600",
              features: [
                "4 centres de soins",
                "Hôpital d'Arta",
                "Futur CHU 220 lits",
                "Distribution intégrée",
              ],
              image:
                "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
            },
          ].map((expertise, index) => {
            const Icon = expertise.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-500 group"
              >
                <div className="h-48 bg-gray-200 overflow-hidden">
                  <img
                    src={expertise.image}
                    alt={expertise.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${expertise.color} rounded-xl flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {expertise.title}
                      </h4>
                      <p className="text-green-300 text-sm">
                        {expertise.subtitle}
                      </p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {expertise.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center space-x-2"
                      >
                        <Star className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span className="text-blue-200 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section Vision */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-12 border border-white/20 text-center">
          <h3 className="text-4xl font-bold text-white mb-6">
            Notre Vision 2030
          </h3>
          <p className="text-2xl text-blue-100 mb-8 leading-relaxed">
            "Faire de Djibouti le hub pharmaceutique de référence de la Corne de
            l'Afrique, alliant innovation technologique et excellence médicale
            au service de la santé publique régionale."
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                icon: TrendingUp,
                title: "Hub Régional",
                description: "Centre pharmaceutique de la Corne de l'Afrique",
              },
              {
                icon: Shield,
                title: "Souveraineté Sanitaire",
                description: "Autonomie pharmaceutique nationale et régionale",
              },
              {
                icon: Award,
                title: "Excellence Reconnue",
                description: "Standards internationaux et certifications",
              },
            ].map((goal, index) => {
              const Icon = goal.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">
                    {goal.title}
                  </h4>
                  <p className="text-blue-200">{goal.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Rejoignez Notre Mission
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Découvrez comment CNSS Pharma peut transformer votre
            approvisionnement pharmaceutique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold">
              Découvrir nos services
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold">
              Nous contacter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CNSSAboutPage;
