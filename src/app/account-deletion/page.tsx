import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shield,
  Trash2,
  UserX,
  CheckCircle,
  AlertTriangle,
  Mail,
  ArrowRight,
  Settings,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Delete Your Hivedemia Account",
  description:
    "Learn how to delete your Hivedemia account and understand what data will be removed from our system.",
};

export default function AccountDeletionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <UserX className="h-10 w-10 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Delete Your{" "}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Hivedemia Account
              </span>
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-6 max-w-3xl mx-auto leading-relaxed">
              At Hivedemia, you are in full control of your data. Learn how to
              permanently delete your account and all associated information.
            </p>
            <Badge
              variant="outline"
              className="bg-white/20 text-white border-white/30 px-4 py-2"
            >
              Complete Data Control
            </Badge>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Steps Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How to Delete Your Account
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to permanently delete your Hivedemia
              account directly from the app.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Open the Hivedemia App
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Launch the Hivedemia application on your device and make
                      sure you&apos;re logged into your account.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Settings className="h-5 w-5 text-purple-600 mr-2" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Go to Settings
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Navigate to the Settings section of the app. This is
                      usually found in the main menu or profile area.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Trash2 className="h-5 w-5 text-orange-600 mr-2" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Scroll Down → Delete Account
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Scroll down to the bottom of the Settings page and look
                      for the &quot;Delete Account&quot; option. Tap on it to
                      proceed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-red-50 to-pink-50 border-red-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <CheckCircle className="h-5 w-5 text-red-600 mr-2" />
                      <h3 className="text-xl font-semibold text-foreground">
                        Confirm Deletion
                      </h3>
                    </div>
                    <p className="text-muted-foreground">
                      Confirm your decision, and your account (including
                      personal info, documents, quizzes, and saved data) will be
                      permanently deleted.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Data Deletion Policy Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Data Deletion Policy
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here&apos;s exactly what happens when you delete your account.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-green-800">
                    ✅ Data Deleted
                  </h3>
                </div>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Your profile and personal information
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    All uploaded documents and files
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Generated quizzes and test results
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Study schedules and plans
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Saved items and bookmarks
                  </li>
                  <li className="flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2 flex-shrink-0" />
                    Performance tracking data
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 rounded-full p-3 mr-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">
                    🔒 Privacy Protection
                  </h3>
                </div>
                <div className="space-y-4 text-blue-700">
                  <p className="font-medium">
                    All data is stored locally on your device and is not shared
                    with any third parties.
                  </p>
                  <p>
                    When you delete your account, all associated data is
                    permanently removed from our systems and cannot be
                    recovered.
                  </p>
                  <p className="text-sm italic">
                    This action is irreversible, so please make sure this is
                    what you want to do.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Warning Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600 mr-4" />
                <h3 className="text-2xl font-bold text-yellow-800">
                  Important Notice
                </h3>
              </div>
              <div className="space-y-3 text-yellow-700">
                <p className="font-medium text-lg">
                  Account deletion is permanent and cannot be undone.
                </p>
                <p>
                  Once you confirm the deletion, all your data will be
                  permanently removed from our systems. You will not be able to
                  recover your account, documents, quizzes, or any other data.
                </p>
                <p>
                  If you&apos;re unsure, consider downloading or backing up any
                  important study materials before proceeding with the deletion.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact Support Section */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white shadow-2xl">
            <CardContent className="p-8 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Need Help?
              </h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto text-indigo-100">
                If you experience any issues deleting your account or have
                questions about our data deletion policy, we&apos;re here to
                help.
              </p>
              <Link
                href="mailto:support@smarthivelabs.dev"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="bg-white text-indigo-700 hover:bg-gray-100 font-semibold px-8 py-4 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Support
                </Button>
              </Link>
              <p className="text-sm mt-4 text-indigo-200">
                Email us at:{" "}
                <span className="font-mono bg-white/20 px-2 py-1 rounded">
                  support@smarthivelabs.dev
                </span>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Back to Hivedemia Section */}
        <section className="text-center">
          <div className="space-y-4">
            <p className="text-muted-foreground">
              Changed your mind? You can always continue using Hivedemia.
            </p>
            <Link href="/hivedemia">
              <Button
                variant="outline"
                size="lg"
                className="hover:bg-primary/10 transition-all duration-300"
              >
                <ArrowRight className="mr-2 h-5 w-5 rotate-180" />
                Back to Hivedemia
              </Button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
