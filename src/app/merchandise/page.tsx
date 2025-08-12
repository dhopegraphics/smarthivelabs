"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Star,
  Truck,
  CreditCard,
  Shirt,
  Coffee,
  Gift,
  ShoppingCart,
  Eye,
} from "lucide-react";
import { getFeaturedProducts } from "@/data/products";
import { useCart } from "@/contexts/CartContext";

export default function Merchandise() {
  const featuredProducts = getFeaturedProducts();
  const { state } = useCart();

  const benefits = [
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Free Shipping",
      description: "On orders over GH₵ 100",
    },
    {
      icon: <CreditCard className="h-6 w-6 text-green-500" />,
      title: "Secure Payment",
      description: "100% secure transactions",
    },
    {
      icon: <Gift className="h-6 w-6 text-purple-500" />,
      title: "Quality Guarantee",
      description: "30-day return policy",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 shadow-lg">
                <ShoppingBag className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Smart Hive{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Store
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-4xl mx-auto leading-relaxed">
              Discover our exclusive collection of premium merchandise designed
              for developers, tech enthusiasts, and innovators who dare to dream
              big
            </p>
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                asChild
              >
                <Link href="#featured">
                  <ShoppingBag className="h-5 w-5 mr-2" />
                  Shop Now
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 px-8 py-4 rounded-full text-lg backdrop-blur-sm"
                asChild
              >
                <Link href="/merchandise/cart">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart ({state.itemCount})
                </Link>
              </Button>
            </div>
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Star className="h-4 w-4 mr-2 text-yellow-300" />
                Premium Quality
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Truck className="h-4 w-4 mr-2 text-green-300" />
                Fast Shipping
              </div>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Gift className="h-4 w-4 mr-2 text-orange-300" />
                Unique Designs
              </div>
            </div>
          </div>
        </div>
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-yellow-300/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-orange-300/20 rounded-full blur-lg"></div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <section className="py-16 -mt-10 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 hover:-translate-y-2 group"
              >
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16" id="featured">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover our most popular items that combine style, quality, and
              our unique Smart Hive Labs branding
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Card
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 group hover:-translate-y-2"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect fill="%23e5e7eb" width="300" height="300"/><text fill="%236b7280" font-family="Arial" font-size="16" text-anchor="middle" x="150" y="150">' +
                          product.name +
                          "</text></svg>";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        className="rounded-full"
                        asChild
                      >
                        <Link href={`/merchandise/product/${product.slug}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      variant={product.inStock ? "default" : "secondary"}
                      className="text-xs font-semibold shadow-sm"
                    >
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </Badge>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge
                      variant="outline"
                      className="text-xs bg-white/90 backdrop-blur-sm"
                    >
                      {product.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold">
                    <Link
                      href={`/merchandise/product/${product.slug}`}
                      className="hover:text-primary transition-colors duration-200"
                    >
                      {product.name}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2 text-muted-foreground">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary">
                      GH₵ {product.price.toFixed(2)}
                    </span>
                    <div className="flex items-center bg-yellow-50 rounded-full px-2 py-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-sm font-medium text-yellow-700">
                        4.8
                      </span>
                    </div>
                  </div>
                </CardContent>

                <CardFooter>
                  <Button
                    className="w-full rounded-full font-semibold"
                    disabled={!product.inStock}
                    variant={product.inStock ? "default" : "secondary"}
                    asChild
                  >
                    <Link href={`/merchandise/product/${product.slug}`}>
                      {product.inStock
                        ? "View Product"
                        : "Notify When Available"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Shop by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Browse our curated collections designed for developers, tech
              enthusiasts, and Smart Hive Labs supporters
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/merchandise/apparel">
              <Card className="bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 border-blue-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center p-6 bg-blue-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Shirt className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-3">
                    Apparel
                  </h3>
                  <p className="text-blue-700 mb-6 leading-relaxed">
                    T-shirts, hoodies, and more comfortable clothing for
                    developers
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-blue-500 text-blue-600 hover:bg-blue-50"
                  >
                    Shop Apparel
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/merchandise/accessories">
              <Card className="bg-gradient-to-br from-green-50 via-green-100 to-emerald-100 border-green-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center p-6 bg-green-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Coffee className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">
                    Accessories
                  </h3>
                  <p className="text-green-700 mb-6 leading-relaxed">
                    Mugs, stickers, and other essentials for your workspace
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-green-500 text-green-600 hover:bg-green-50"
                  >
                    Shop Accessories
                  </Button>
                </CardContent>
              </Card>
            </Link>

            <Link href="/merchandise/gifts">
              <Card className="bg-gradient-to-br from-purple-50 via-purple-100 to-violet-100 border-purple-200 hover:shadow-2xl transition-all duration-500 cursor-pointer group hover:-translate-y-2">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="inline-flex items-center justify-center p-6 bg-purple-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Gift className="h-10 w-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-3">
                    Gift Sets
                  </h3>
                  <p className="text-purple-700 mb-6 leading-relaxed">
                    Perfect bundles for the developers in your life
                  </p>
                  <Button
                    variant="outline"
                    className="rounded-full border-purple-500 text-purple-600 hover:bg-purple-50"
                  >
                    Shop Gifts
                  </Button>
                </CardContent>
              </Card>
            </Link>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl p-12 md:p-16 text-white text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Join the Smart Hive Community
              </h2>
              <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto text-blue-100 leading-relaxed">
                Wear your passion for technology and innovation. Every purchase
                supports our mission to create amazing digital experiences
              </p>
              <div className="flex flex-wrap gap-6 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  asChild
                >
                  <Link href="#featured">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Start Shopping
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white/10 px-8 py-4 rounded-full text-lg backdrop-blur-sm"
                  asChild
                >
                  <Link href="/merchandise/cart">
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    View Cart ({state.itemCount})
                  </Link>
                </Button>
              </div>
            </div>
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>
          </div>
        </section>

        {/* Shipping Notice */}
        <section className="pb-16">
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-8 text-center shadow-lg">
            <div className="inline-flex items-center justify-center p-4 bg-amber-500 rounded-full mb-4">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-amber-900 mb-3">
              🇬🇭 Shipping Within Ghana Only
            </h3>
            <p className="text-amber-800 text-lg max-w-2xl mx-auto leading-relaxed">
              We currently ship to all regions within Ghana. Free shipping on
              orders over GH₵ 100. Delivery takes 3-5 business days
            </p>
          </div>
        </section>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
