"use client";

import React from "react";
import Image from "next/image";
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
} from "lucide-react";

export default function Merchandise() {
  const featuredProducts = [
    {
      id: 1,
      name: "Smart Hive Labs T-Shirt",
      description: "Premium cotton t-shirt with our signature logo",
      price: "$29.99",
      image: "/merchandise/tshirt-black.jpg",
      category: "Apparel",
      rating: 4.8,
      inStock: true,
    },
    {
      id: 2,
      name: "Developer Coffee Mug",
      description: "Start your coding sessions right with our premium mug",
      price: "$19.99",
      image: "/merchandise/mug-white.jpg",
      category: "Accessories",
      rating: 4.9,
      inStock: true,
    },
    {
      id: 3,
      name: "SHL Hoodie",
      description: "Comfortable hoodie perfect for late-night coding",
      price: "$59.99",
      image: "/merchandise/hoodie-grey.jpg",
      category: "Apparel",
      rating: 4.7,
      inStock: false,
    },
    {
      id: 4,
      name: "Tech Sticker Pack",
      description: "Collection of 10 unique Smart Hive Labs stickers",
      price: "$12.99",
      image: "/merchandise/stickers.jpg",
      category: "Accessories",
      rating: 4.6,
      inStock: true,
    },
  ];

  const benefits = [
    {
      icon: <Truck className="h-6 w-6 text-blue-500" />,
      title: "Free Shipping",
      description: "On orders over $50",
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
    <div className="py-12 px-4 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">
          <ShoppingBag className="h-8 w-8 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Welcome to Smart Hive Labs Merchandise!
        </h1>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto mb-8">
          Show your support for Smart Hive Labs with our exclusive collection of
          high-quality merchandise. From comfortable apparel to practical
          accessories, we&apos;ve got everything for the modern developer.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            Shop Now
          </Button>
          <Button variant="outline" size="lg">
            View Collections
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-6 text-center shadow-sm"
            >
              <div className="inline-flex items-center justify-center p-3 bg-neutral-100 dark:bg-neutral-800 rounded-full mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Discover our most popular items that combine style, quality, and our
            unique Smart Hive Labs branding.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card
              key={product.id}
              className="bg-white dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800 overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700 flex items-center justify-center">
                  <div className="relative w-3/4 h-3/4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 400 400"><rect fill="%23e5e7eb" width="400" height="400"/><text fill="%236b7280" font-family="Arial" font-size="16" text-anchor="middle" x="200" y="200">' +
                          product.name +
                          "</text></svg>";
                      }}
                    />
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <Badge
                    variant={product.inStock ? "default" : "secondary"}
                    className="text-xs"
                  >
                    {product.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
                <div className="absolute top-2 left-2">
                  <Badge variant="outline" className="text-xs">
                    {product.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{product.name}</CardTitle>
                <CardDescription className="text-sm">
                  {product.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="pb-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
                    {product.price}
                  </span>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm text-neutral-600 dark:text-neutral-400">
                      {product.rating}
                    </span>
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  className="w-full"
                  disabled={!product.inStock}
                  variant={product.inStock ? "default" : "secondary"}
                >
                  {product.inStock ? "Add to Cart" : "Notify When Available"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Shop by Category</h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Browse our curated collections designed for developers, tech
            enthusiasts, and Smart Hive Labs supporters.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-blue-100 dark:bg-blue-900/40 rounded-full mb-4">
                <Shirt className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Apparel</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                T-shirts, hoodies, and more comfortable clothing for developers
              </p>
              <Button variant="outline" size="sm">
                Shop Apparel
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-green-100 dark:bg-green-900/40 rounded-full mb-4">
                <Coffee className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Accessories</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Mugs, stickers, and other essentials for your workspace
              </p>
              <Button variant="outline" size="sm">
                Shop Accessories
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/30 dark:to-violet-950/30 border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 cursor-pointer">
            <CardContent className="pt-6 text-center">
              <div className="inline-flex items-center justify-center p-4 bg-purple-100 dark:bg-purple-900/40 rounded-full mb-4">
                <Gift className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gift Sets</h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Perfect bundles for the developers in your life
              </p>
              <Button variant="outline" size="sm">
                Shop Gifts
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-2xl p-8 md:p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Join the Smart Hive Community
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100 dark:text-blue-200">
          Wear your passion for technology and innovation. Every purchase
          supports our mission to create amazing digital experiences.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-700 hover:bg-neutral-100"
          >
            Start Shopping
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="text-white border-white hover:bg-white/10"
          >
            View All Products
          </Button>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="mt-12 text-center">
        <div className="bg-amber-100 dark:bg-amber-900/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">
            Store Coming Soon!
          </h3>
          <p className="text-amber-700 dark:text-amber-400">
            We&apos;re working hard to bring you an amazing shopping experience.
            Sign up for our newsletter to be notified when the store launches.
          </p>
        </div>
      </section>
    </div>
  );
}
