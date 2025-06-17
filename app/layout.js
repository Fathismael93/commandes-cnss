"use client";

import { useContext, useState } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { Package } from "lucide-react";
import "./globals.css";
import AuthContext, { AuthProvider } from "@/context/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const { user } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <head>
        <title>CNSS Pharma - Sécurité & Confiance</title>
        <meta
          name="description"
          content="Plateforme de commande en gros de produits pharmaceutiques - CNSS Djibouti"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <div className="min-h-screen bg-gradient-to-br from-blue-900 via-green-800 to-blue-800 relative overflow-hidden">
            {/* Éléments de fond décoratifs */}
            <div className="fixed inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
              <div className="absolute top-40 right-20 w-24 h-24 border border-green-300/30 rounded-full"></div>
              <div className="absolute bottom-40 left-1/4 w-16 h-16 border border-blue-300/40 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-1/3 right-1/4 w-12 h-12 bg-green-400/20 rounded-full"></div>
            </div>

            {/* Particules flottantes */}
            <div className="fixed inset-0 pointer-events-none">
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
                  <Link
                    href="/"
                    className="flex items-center space-x-3 hover:opacity-90 transition-opacity"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                      <Package className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h1 className="text-xl font-bold text-white">
                        CNSS PHARMA
                      </h1>
                      <p className="text-xs text-green-200">
                        Sécurité & Confiance
                      </p>
                    </div>
                  </Link>

                  {/* Menu Desktop */}
                  <div className="hidden md:flex items-center space-x-8">
                    <Link
                      href="/"
                      className="text-white hover:text-green-300 transition-colors font-medium"
                    >
                      Accueil
                    </Link>

                    <Link
                      href="/catalogue"
                      className="text-white hover:text-green-300 transition-colors font-medium"
                    >
                      Catalogue
                    </Link>

                    <Link
                      href="/about"
                      className="text-white hover:text-green-300 transition-colors font-medium"
                    >
                      Présentation
                    </Link>

                    <Link
                      href="/contact"
                      className="text-white hover:text-green-300 transition-colors font-medium"
                    >
                      Contact
                    </Link>

                    {user ? (
                      console.log("User is logged in:", user.name)
                    ) : (
                      <Link
                        href="/login"
                        className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                      >
                        Connexion
                      </Link>
                    )}
                  </div>

                  {/* Menu Mobile */}
                  <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Menu mobile"
                  >
                    <div className="w-6 h-6 flex flex-col justify-around">
                      <span className="w-full h-0.5 bg-white rounded-full"></span>
                      <span className="w-full h-0.5 bg-white rounded-full"></span>
                      <span className="w-full h-0.5 bg-white rounded-full"></span>
                    </div>
                  </button>
                </div>
              </div>
            </nav>

            {/* Menu mobile overlay */}
            {isMenuOpen && (
              <div className="fixed inset-0 z-50 bg-blue-900/95 backdrop-blur-md md:hidden">
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                  <Link
                    href="/"
                    className="text-2xl text-white hover:text-green-300 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Accueil
                  </Link>
                  <Link
                    href="/catalogue"
                    className="text-2xl text-white hover:text-green-300 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Catalogue
                  </Link>
                  <Link
                    href="/presentation"
                    className="text-2xl text-white hover:text-green-300 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Présentation
                  </Link>
                  <Link
                    href="/contact"
                    className="text-2xl text-white hover:text-green-300 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  <Link
                    href="/login"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-full text-xl font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Connexion
                  </Link>
                  <button
                    className="absolute top-8 right-8 text-white text-3xl"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Fermer le menu"
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            {/* Contenu principal */}
            <main className="relative z-10">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
