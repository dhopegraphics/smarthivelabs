"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Share2, Home, ShoppingBag } from "lucide-react";
import { useSearchParams } from "next/navigation";

function SuccessPageContent() {
  const searchParams = useSearchParams();
  const paymentRef = searchParams.get("ref");
  const amount = searchParams.get("amount");

  const shareOrder = () => {
    const shareText = `I just ordered some amazing Smart Hive Labs merchandise! 🛍️ Check out their store: ${window.location.origin}/merchandise`;

    if (navigator.share) {
      navigator.share({
        title: "Smart Hive Labs Order",
        text: shareText,
        url: `${window.location.origin}/merchandise`,
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareText).then(() => {
        alert("Link copied to clipboard!");
      });
    }
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(
      "I just ordered some amazing Smart Hive Labs merchandise! 🛍️ #SmartHiveLabs #TechMerch"
    );
    const url = encodeURIComponent(`${window.location.origin}/merchandise`);
    window.open(
      `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      "_blank"
    );
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(`${window.location.origin}/merchandise`);
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank"
    );
  };

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto text-center">
      {/* Success Icon and Message */}
      <div className="mb-8">
        <div className="inline-flex items-center justify-center p-4 bg-green-100 bg-green-50 rounded-full mb-6">
          <CheckCircle className="h-16 w-16 text-green-600 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold mb-4 text-green-600 text-green-600">
          Order Placed Successfully!
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Thank you for your purchase! Your order has been confirmed and
          we&apos;ll begin processing it shortly.
        </p>
      </div>

      {/* Order Details Card */}
      <Card className="mb-8 max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Order Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {paymentRef && (
            <div>
              <label className="text-sm font-medium text-gray-600">
                Payment Reference
              </label>
              <p className="font-mono text-sm bg-gray-50 p-2 rounded border">
                {paymentRef}
              </p>
            </div>
          )}

          {amount && (
            <div>
              <label className="text-sm font-medium text-gray-600">
                Total Amount
              </label>
              <p className="text-2xl font-bold text-green-600 text-green-600">
                GH₵ {parseFloat(amount).toFixed(2)}
              </p>
            </div>
          )}

          <div>
            <label className="text-sm font-medium text-gray-600">
              Order Date
            </label>
            <p className="text-gray-700">
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div>
        </CardContent>
      </Card>

      {/* What Happens Next */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What Happens Next?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-semibold mb-1">Order Confirmation</h3>
                <p className="text-sm text-gray-600">
                  You&apos;ll receive an email confirmation with your order
                  details within the next few minutes.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-semibold mb-1">Processing</h3>
                <p className="text-sm text-gray-600">
                  We&apos;ll prepare your order and get it ready for shipping
                  within 1-2 business days.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center text-sm font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-semibold mb-1">Delivery</h3>
                <p className="text-sm text-gray-600">
                  Your order will be delivered within 3-5 business days across
                  Ghana.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Share Section */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-center gap-2">
            <Share2 className="h-5 w-5" />
            Share Your Purchase
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-6">
            Love Smart Hive Labs? Share your purchase with friends and help
            spread the word!
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
              onClick={shareOnTwitter}
              variant="outline"
              className="flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Share on Twitter
            </Button>
            <Button
              onClick={shareOnFacebook}
              variant="outline"
              className="flex items-center gap-2"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Share on Facebook
            </Button>
            <Button
              onClick={shareOrder}
              variant="outline"
              className="flex items-center gap-2"
            >
              <Share2 className="h-4 w-4" />
              Share Link
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 justify-center">
        <Button asChild size="lg">
          <Link href="/merchandise">
            <ShoppingBag className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </Button>
        <Button variant="outline" asChild size="lg">
          <Link href="/">
            <Home className="h-5 w-5 mr-2" />
            Back to Home
          </Link>
        </Button>
      </div>

      {/* Contact Support */}
      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h3 className="font-semibold mb-2">Need Help?</h3>
        <p className="text-sm text-gray-600 mb-4">
          If you have any questions about your order, feel free to contact our
          support team.
        </p>
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <a
            href="mailto:support@smarthivelabs.dev"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            support@smarthivelabs.dev
          </a>
          <a
            href="tel:+233597959032"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            +233 597959032
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div className="py-16 text-center">Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
}
