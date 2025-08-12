"use client";

import React, { useState, use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { getProductBySlug } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const { addToCart } = useCart();

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  if (!product) {
    notFound();
  }

  const handleAddToCart = async () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }

    setIsLoading(true);

    try {
      addToCart({
        product,
        quantity,
        selectedSize,
        selectedColor: selectedColor,
      });

      toast.success(`${product.name} added to cart!`);
    } catch {
      toast.error("Failed to add item to cart");
    } finally {
      setIsLoading(false);
    }
  };

  const selectedColorObj = product.colors.find(
    (color) => color.name === selectedColor
  );

  return (
    <div className="py-8 px-4 max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-8">
        <Link
          href="/merchandise"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Store
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-50 rounded-xl overflow-hidden">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              width={600}
              height={600}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src =
                  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="600" viewBox="0 0 600 600"><rect fill="%23e5e7eb" width="600" height="600"/><text fill="%236b7280" font-family="Arial" font-size="24" text-anchor="middle" x="300" y="300">' +
                  product.name +
                  "</text></svg>";
              }}
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 overflow-x-auto">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} view ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src =
                      'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80"><rect fill="%23e5e7eb" width="80" height="80"/><text fill="%236b7280" font-family="Arial" font-size="8" text-anchor="middle" x="40" y="40">View ' +
                      (index + 1) +
                      "</text></svg>";
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <Badge variant="outline" className="mb-2">
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                (4.8) • 127 reviews
              </span>
            </div>
            <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
              GH₵ {product.price.toFixed(2)}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Size Selection */}
          {product.sizes.length > 1 && (
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <Select onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          {/* Color Selection */}
          <div>
            <label className="block text-sm font-medium mb-2">Color</label>
            <div className="flex gap-3">
              {product.colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                    selectedColor === color.name
                      ? "border-blue-500 scale-110"
                      : "border-neutral-300 dark:border-neutral-600"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                >
                  {selectedColor === color.name && (
                    <div className="absolute inset-0 rounded-full border-2 border-white"></div>
                  )}
                </button>
              ))}
            </div>
            {selectedColorObj && (
              <p className="text-sm text-gray-600 mt-1">
                Selected: {selectedColorObj.name}
              </p>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <Select onValueChange={(value) => setQuantity(parseInt(value))}>
              <SelectTrigger className="w-32">
                <SelectValue placeholder="1" />
              </SelectTrigger>
              <SelectContent>
                {[...Array(10)].map((_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {i + 1}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4">
            <Button
              onClick={handleAddToCart}
              disabled={isLoading || !product.inStock}
              className="flex-1 h-12"
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isLoading ? "Adding..." : "Add to Cart"}
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12">
              <Heart className="h-5 w-5" />
            </Button>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <div
              className={`w-3 h-3 rounded-full ${
                product.inStock ? "bg-green-500" : "bg-red-500"
              }`}
            ></div>
            <span className="text-sm">
              {product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}
            </span>
          </div>

          {/* Shipping Info */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Free Shipping within Ghana</p>
                    <p className="text-sm text-gray-600">
                      On orders over GH₵ 100
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-green-500" />
                  <div>
                    <p className="font-medium">Quality Guarantee</p>
                    <p className="text-sm text-gray-600">
                      30-day return policy
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium">Easy Returns</p>
                    <p className="text-sm text-gray-600">
                      Hassle-free returns within 30 days
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
