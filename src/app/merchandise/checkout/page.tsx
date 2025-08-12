"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, CreditCard, Lock, Truck, CheckCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

interface CustomerInfo {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
}

export default function CheckoutPage() {
  const { state, clearCart } = useCart();
  const router = useRouter();

  const [customerInfo, setCustomerInfo] = useState<CustomerInfo>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    region: "",
  });

  const [isProcessing, setIsProcessing] = useState(false);
  const [errors, setErrors] = useState<Partial<CustomerInfo>>({});

  const shipping = state.total >= 100 ? 0 : 15;
  const finalTotal = state.total + shipping;

  // Redirect if cart is empty
  if (state.items.length === 0) {
    return (
      <div className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-4">No Items to Checkout</h1>
        <p className="text-gray-600 mb-8">
          Your cart is empty. Please add some items before proceeding to
          checkout.
        </p>
        <Button asChild size="lg">
          <Link href="/merchandise">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<CustomerInfo> = {};

    if (!customerInfo.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!customerInfo.lastName.trim())
      newErrors.lastName = "Last name is required";
    if (!customerInfo.email.trim()) newErrors.email = "Email is required";
    if (!customerInfo.phone.trim())
      newErrors.phone = "Phone number is required";
    if (!customerInfo.address.trim()) newErrors.address = "Address is required";
    if (!customerInfo.city.trim()) newErrors.city = "City is required";
    if (!customerInfo.region.trim()) newErrors.region = "Region is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (customerInfo.email && !emailRegex.test(customerInfo.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Phone validation (Ghana format)
    const phoneRegex = /^(\+233|0)[2-9]\d{8}$/;
    if (
      customerInfo.phone &&
      !phoneRegex.test(customerInfo.phone.replace(/\s/g, ""))
    ) {
      newErrors.phone = "Please enter a valid Ghana phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitToGoogleForms = async (paymentReference: string) => {
    // Google Forms submission URL (replace with your actual form URL)
    const GOOGLE_FORM_URL =
      "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";

    // Prepare order data
    const orderData = {
      "entry.1234567": customerInfo.firstName, // Replace with actual entry IDs from your Google Form
      "entry.2234567": customerInfo.lastName,
      "entry.3234567": customerInfo.email,
      "entry.4234567": customerInfo.phone,
      "entry.5234567": customerInfo.address,
      "entry.6234567": customerInfo.city,
      "entry.7234567": customerInfo.region,
      "entry.8234567": paymentReference,
      "entry.9234567": finalTotal.toString(),
      "entry.1034567": JSON.stringify(
        state.items.map((item) => ({
          name: item.product.name,
          quantity: item.quantity,
          size: item.selectedSize,
          color: item.selectedColor,
          price: item.product.price,
        }))
      ),
      "entry.1134567": new Date().toISOString(),
    };

    try {
      const formData = new FormData();
      Object.entries(orderData).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      console.log("Order submitted to Google Forms successfully");
    } catch (error) {
      console.error("Error submitting to Google Forms:", error);
      // Don't throw error here as payment was successful
    }
  };

  const initializePaystackPayment = () => {
    if (!validateForm()) {
      toast.error("Please fill in all required fields correctly");
      return;
    }

    setIsProcessing(true);

    // For development - simulate payment with mock data
    // Replace this section with actual Paystack integration when ready
    if (process.env.NODE_ENV === "development") {
      setTimeout(async () => {
        try {
          const mockReference = `SHL_${Date.now()}_${Math.random()
            .toString(36)
            .substr(2, 9)}`;

          // Submit order to Google Forms
          await submitToGoogleForms(mockReference);

          // Clear cart
          clearCart();

          // Redirect to success page
          router.push(
            `/merchandise/success?ref=${mockReference}&amount=${finalTotal}`
          );

          toast.success("Order placed successfully!");
        } catch (error) {
          console.error("Error processing order:", error);
          toast.error("Failed to process order. Please try again.");
        } finally {
          setIsProcessing(false);
        }
      }, 2000);
      return;
    }

    // Mock payment processing for development
    // Replace with actual Paystack integration in production
    setTimeout(async () => {
      try {
        const paymentReference = `SHL_${Date.now()}_${Math.random()
          .toString(36)
          .substr(2, 9)}`;

        // Submit order to Google Forms
        await submitToGoogleForms(paymentReference);

        // Clear cart
        clearCart();

        // Redirect to success page
        router.push(
          `/merchandise/success?ref=${paymentReference}&amount=${finalTotal}`
        );

        toast.success("Order placed successfully!");
      } catch (error) {
        console.error("Error processing order:", error);
        toast.error("Failed to process order. Please try again.");
      } finally {
        setIsProcessing(false);
      }
    }, 2000);
  };
  const handleInputChange = (field: keyof CustomerInfo, value: string) => {
    setCustomerInfo((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="py-8 px-4 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <Link
          href="/merchandise/cart"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Cart
        </Link>
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Customer Information Form */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    value={customerInfo.firstName}
                    onChange={(e) =>
                      handleInputChange("firstName", e.target.value)
                    }
                    className={errors.firstName ? "border-red-500" : ""}
                  />
                  {errors.firstName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    value={customerInfo.lastName}
                    onChange={(e) =>
                      handleInputChange("lastName", e.target.value)
                    }
                    className={errors.lastName ? "border-red-500" : ""}
                  />
                  {errors.lastName && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={customerInfo.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="e.g., +233 24 123 4567"
                  value={customerInfo.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  value={customerInfo.address}
                  onChange={(e) => handleInputChange("address", e.target.value)}
                  className={errors.address ? "border-red-500" : ""}
                />
                {errors.address && (
                  <p className="text-sm text-red-500 mt-1">{errors.address}</p>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    value={customerInfo.city}
                    onChange={(e) => handleInputChange("city", e.target.value)}
                    className={errors.city ? "border-red-500" : ""}
                  />
                  {errors.city && (
                    <p className="text-sm text-red-500 mt-1">{errors.city}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="region">Region *</Label>
                  <Input
                    id="region"
                    value={customerInfo.region}
                    onChange={(e) =>
                      handleInputChange("region", e.target.value)
                    }
                    className={errors.region ? "border-red-500" : ""}
                  />
                  {errors.region && (
                    <p className="text-sm text-red-500 mt-1">{errors.region}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Delivery Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="h-5 w-5" />
                Delivery Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="font-medium">Standard Delivery</span>
              </div>
              <p className="text-sm text-gray-600">
                Delivery within 3-5 business days across Ghana
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Order Summary */}
        <div>
          <Card className="sticky top-4">
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Order Items */}
              <div className="space-y-3">
                {state.items.map((item) => (
                  <div key={item.itemId} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src =
                            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><rect fill="%23e5e7eb" width="64" height="64"/></svg>';
                        }}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{item.product.name}</p>
                      <div className="flex gap-2 text-xs">
                        <Badge variant="outline" className="text-xs">
                          {item.selectedSize}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          {item.selectedColor}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">
                        GH₵ {(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator />

              {/* Price Breakdown */}
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
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
                <Separator />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>GH₵ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Payment Button */}
              <Button
                onClick={initializePaystackPayment}
                disabled={isProcessing}
                className="w-full"
                size="lg"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                {isProcessing
                  ? "Processing..."
                  : `Pay GH₵ ${finalTotal.toFixed(2)}`}
              </Button>

              {/* Security Info */}
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                <Lock className="h-4 w-4" />
                <span>Secured by Paystack</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
