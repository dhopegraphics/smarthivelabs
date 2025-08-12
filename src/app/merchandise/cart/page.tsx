"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ShoppingBag,
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShoppingCart,
} from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart } = useCart();

  const shipping = state.total >= 100 ? 0 : 15; // Free shipping over GH₵ 100
  const finalTotal = state.total + shipping;

  if (state.items.length === 0) {
    return (
      <div className="py-16 px-4 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center p-4 bg-gray-50 rounded-full mb-6">
          <ShoppingBag className="h-12 w-12 text-neutral-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven&apos;t added any items to your cart yet.
        </p>
        <Button asChild size="lg">
          <Link href="/merchandise">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/merchandise"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>
        <h1 className="text-3xl font-bold">Shopping Cart</h1>
        <p className="text-gray-600">
          {state.itemCount} {state.itemCount === 1 ? "item" : "items"} in your
          cart
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {state.items.map((item) => (
            <Card key={item.itemId}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src =
                          'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96"><rect fill="%23e5e7eb" width="96" height="96"/><text fill="%236b7280" font-family="Arial" font-size="8" text-anchor="middle" x="48" y="48">' +
                          item.product.name +
                          "</text></svg>";
                      }}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg mb-1">
                      <Link
                        href={`/merchandise/product/${item.product.slug}`}
                        className="hover:text-blue-600 dark:hover:text-blue-400"
                      >
                        {item.product.name}
                      </Link>
                    </h3>
                    <div className="flex gap-4 mb-2">
                      <Badge variant="outline">Size: {item.selectedSize}</Badge>
                      <Badge variant="outline">
                        Color: {item.selectedColor}
                      </Badge>
                    </div>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      GH₵ {item.product.price.toFixed(2)}
                    </p>
                  </div>

                  {/* Quantity and Actions */}
                  <div className="flex flex-col items-end gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeFromCart(item.itemId)}
                      className="text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/30"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>

                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.itemId, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="w-12 text-center font-medium">
                        {item.quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() =>
                          updateQuantity(item.itemId, item.quantity + 1)
                        }
                        disabled={item.quantity >= 10}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="font-semibold">
                      GH₵ {(item.product.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Order Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal ({state.itemCount} items)</span>
                <span>GH₵ {state.total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span
                  className={
                    shipping === 0 ? "text-green-600 text-green-600" : ""
                  }
                >
                  {shipping === 0 ? "FREE" : `GH₵ ${shipping.toFixed(2)}`}
                </span>
              </div>

              {shipping > 0 && (
                <div className="text-sm text-gray-600">
                  Add GH₵ {(100 - state.total).toFixed(2)} more for free
                  shipping
                </div>
              )}

              <hr className="border-gray-200" />

              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>GH₵ {finalTotal.toFixed(2)}</span>
              </div>

              <div className="space-y-2">
                <Button asChild className="w-full" size="lg">
                  <Link href="/merchandise/checkout">Proceed to Checkout</Link>
                </Button>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/merchandise">Continue Shopping</Link>
                </Button>
              </div>

              {/* Shipping Info */}
              <div className="text-sm text-gray-600 space-y-2">
                <p>🚚 Delivery within 3-5 business days</p>
                <p>📦 Free shipping on orders over GH₵ 100</p>
                <p>🇬🇭 Shipping within Ghana only</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
