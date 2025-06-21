"use client";

import React, { useState, useEffect } from "react";
import {
  Search,
  Filter,
  Package,
  ShoppingCart,
  Plus,
  Minus,
  CheckCircle,
  AlertTriangle,
  Star,
  Grid,
  List,
  SlidersHorizontal,
  X,
} from "lucide-react";
import Link from "next/link";
import { allProducts } from "@/data/products_pharma_final";

const ListProducts = () => {
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [sortBy, setSortBy] = useState("name");
  const [viewMode, setViewMode] = useState("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [cart, setCart] = useState({});
  const [priceRange, setPriceRange] = useState([0, 2000]);

  // Récupérer les catégories uniques
  const categories = [
    "Tous",
    ...new Set(allProducts.map((product) => product.category)),
  ];

  // Effet pour filtrer les produits
  useEffect(() => {
    let filtered = allProducts;

    // Filtrage par recherche
    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          product.manufacturer.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filtrage par catégorie
    if (selectedCategory !== "Tous") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filtrage par prix
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "stock":
          return b.stock - a.stock;
        default:
          return 0;
      }
    });

    setFilteredProducts(filtered);
  }, [searchTerm, selectedCategory, sortBy, priceRange, allProducts]);

  // Fonctions du panier
  const addToCart = (productId) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[productId] > 1) {
        newCart[productId]--;
      } else {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const getCartQuantity = (productId) => cart[productId] || 0;

  const getTotalItems = () =>
    Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const getTotalPrice = () => {
    return Object.entries(cart).reduce((total, [productId, quantity]) => {
      const product = allProducts.find((p) => p.id === parseInt(productId));
      return total + (product ? product.price * quantity : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen pt-16 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Catalogue
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
              Pharmaceutique
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Découvrez notre gamme complète de médicaments et produits de santé
            certifiés
          </p>
        </div>

        {/* Barre de recherche et filtres */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Recherche */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/50" />
              <input
                type="text"
                placeholder="Rechercher un médicament, fabricant..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-green-400 transition-colors"
              />
            </div>

            {/* Boutons d'actions */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-3 rounded-xl transition-all duration-300 border border-white/20"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filtres</span>
              </button>

              <div className="flex items-center bg-white/10 rounded-xl border border-white/20">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-3 rounded-l-xl transition-colors ${
                    viewMode === "grid"
                      ? "bg-green-500 text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-3 rounded-r-xl transition-colors ${
                    viewMode === "list"
                      ? "bg-green-500 text-white"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>

              {/* Panier - Navigation vers la page panier */}
              <Link href="/cart">
                <div className="relative">
                  <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white p-3 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 shadow-lg">
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </div>

          {/* Filtres étendus */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-white/20">
              <div className="grid md:grid-cols-3 gap-6">
                {/* Catégories */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Catégorie
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400"
                  >
                    {categories.map((category) => (
                      <option
                        key={category}
                        value={category}
                        className="bg-gray-800"
                      >
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Tri */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Trier par
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-green-400"
                  >
                    <option value="name" className="bg-gray-800">
                      Nom A-Z
                    </option>
                    <option value="price-asc" className="bg-gray-800">
                      Prix croissant
                    </option>
                    <option value="price-desc" className="bg-gray-800">
                      Prix décroissant
                    </option>
                    <option value="rating" className="bg-gray-800">
                      Meilleure note
                    </option>
                    <option value="stock" className="bg-gray-800">
                      Stock disponible
                    </option>
                  </select>
                </div>

                {/* Gamme de prix */}
                <div>
                  <label className="block text-white font-medium mb-3">
                    Prix: {priceRange[0]} FDJ - {priceRange[1]} FDJ
                  </label>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([0, parseInt(e.target.value)])
                      }
                      className="flex-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Résultats */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-white/70">
            {filteredProducts.length} produit
            {filteredProducts.length > 1 ? "s" : ""} trouvé
            {filteredProducts.length > 1 ? "s" : ""}
          </p>
          {getTotalItems() > 0 && (
            <div className="bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
              <span className="text-white font-medium">
                Panier: {getTotalItems()} article
                {getTotalItems() > 1 ? "s" : ""} -{" "}
                {getTotalPrice().toLocaleString()} FDJ
              </span>
            </div>
          )}
        </div>

        {/* Liste des produits */}
        {viewMode === "grid" ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                cartQuantity={getCartQuantity(product.id)}
                onAddToCart={() => addToCart(product.id)}
                onRemoveFromCart={() => removeFromCart(product.id)}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductListItem
                key={product.id}
                product={product}
                cartQuantity={getCartQuantity(product.id)}
                onAddToCart={() => addToCart(product.id)}
                onRemoveFromCart={() => removeFromCart(product.id)}
              />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <Package className="w-24 h-24 text-white/30 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Aucun produit trouvé
            </h3>
            <p className="text-blue-200">
              Essayez de modifier vos critères de recherche
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

// Composant carte de produit (vue grille)
const ProductCard = ({
  product,
  cartQuantity,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden border border-white/20 hover:bg-white/15 transition-all duration-300 group">
      <div className="h-48 bg-gray-200 overflow-hidden relative">
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4">
          {product.stock > 20 ? (
            <div className="bg-green-500/80 text-white px-2 py-1 rounded-full text-xs font-medium">
              En stock
            </div>
          ) : product.stock > 0 ? (
            <div className="bg-orange-500/80 text-white px-2 py-1 rounded-full text-xs font-medium">
              Stock faible
            </div>
          ) : (
            <div className="bg-red-500/80 text-white px-2 py-1 rounded-full text-xs font-medium">
              Rupture
            </div>
          )}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h4 className="text-white font-bold text-lg group-hover:text-green-300 transition-colors">
            {product.name}
          </h4>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-white text-sm">{product.rating}</span>
          </div>
        </div>

        <p className="text-blue-200 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-green-300 text-sm">{product.manufacturer}</span>
          <span className="text-white/70 text-sm">{product.category}</span>
        </div>

        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-white">
            {product.price.toLocaleString()} FDJ
          </span>
          <span className="text-white/70 text-sm">Stock: {product.stock}</span>
        </div>

        {cartQuantity > 0 ? (
          <div className="flex items-center justify-between bg-white/10 rounded-xl p-3">
            <button
              onClick={onRemoveFromCart}
              className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="text-white font-medium">{cartQuantity}</span>
            <button
              onClick={onAddToCart}
              disabled={cartQuantity >= product.stock}
              className="w-8 h-8 bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full flex items-center justify-center transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={onAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-gradient-to-r from-green-500 to-blue-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white py-3 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 font-medium"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>
              {product.stock === 0 ? "Rupture de stock" : "Ajouter au panier"}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

// Composant item de produit (vue liste)
const ProductListItem = ({
  product,
  cartQuantity,
  onAddToCart,
  onRemoveFromCart,
}) => {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
      <div className="flex items-center space-x-6">
        <div className="w-20 h-20 bg-gray-200 rounded-xl overflow-hidden flex-shrink-0">
          <img
            src={product.imageURL}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h4 className="text-white font-bold text-lg">{product.name}</h4>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-white text-sm">{product.rating}</span>
              </div>
              <span className="text-2xl font-bold text-white">
                {product.price.toLocaleString()} FDJ
              </span>
            </div>
          </div>

          <p className="text-blue-200 text-sm mb-2">{product.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-green-300 text-sm">
                {product.manufacturer}
              </span>
              <span className="text-white/70 text-sm">{product.category}</span>
              <span className="text-white/70 text-sm">
                Stock: {product.stock}
              </span>
              {product.stock > 20 ? (
                <CheckCircle className="w-4 h-4 text-green-400" />
              ) : product.stock > 0 ? (
                <AlertTriangle className="w-4 h-4 text-orange-400" />
              ) : (
                <X className="w-4 h-4 text-red-400" />
              )}
            </div>

            <div className="flex items-center space-x-4">
              {cartQuantity > 0 && (
                <div className="flex items-center space-x-2">
                  <button
                    onClick={onRemoveFromCart}
                    className="w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="text-white font-medium w-8 text-center">
                    {cartQuantity}
                  </span>
                </div>
              )}
              <button
                onClick={onAddToCart}
                disabled={product.stock === 0 || cartQuantity >= product.stock}
                className="bg-gradient-to-r from-green-500 to-blue-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white px-6 py-2 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center space-x-2"
              >
                <ShoppingCart className="w-4 h-4" />
                <span>{cartQuantity > 0 ? "+" : "Ajouter"}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
