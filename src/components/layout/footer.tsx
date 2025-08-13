import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-primary w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SH</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">
                Smart Hive Labs
              </h3>
            </div>
            <p className="text-gray-600 mb-3 leading-relaxed">
              Professional development and design services for businesses ready
              to grow their digital presence.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>
                <strong>Founded by:</strong> Mensah Isaac Nana Sam
              </p>
              <p>
                <strong>Brand:</strong> Dhope Graphics
              </p>
              <p className="italic">&quot;Crafting Digital Excellence&quot;</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Our Services</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Web Development
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Mobile Apps
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Graphic Design
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  AI Solutions
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Branding & Identity
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  About Us
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Our Work
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Careers
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Blog
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition-colors flex items-center"
                >
                  Contact Us
                  <ExternalLink size={12} className="ml-1 opacity-50" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Get In Touch</h4>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail size={16} className="text-primary" />
                <a
                  href="mailto:hello@smarthivelabs.dev"
                  className="hover:text-primary transition-colors"
                >
                  support@smarthivelabs.dev
                </a>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone size={16} className="text-primary" />
                <span>+233 (59) 795-9032</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <MapPin size={16} className="text-primary" />
                <span>Available Worldwide</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              <a
                href="#"
                className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-primary"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-primary"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="bg-white p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-600 hover:text-primary"
              >
                <Github size={20} />
              </a>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h5 className="font-medium text-gray-900 mb-2 text-sm">
                Stay Updated
              </h5>
              <NewsletterForm />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600 text-sm">
                &copy; {currentYear} Smart Hive Labs. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Built with passion for digital excellence.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <Link
                href="/hivedemia-privacy"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/hivedemia-termsofuse"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/hire-us"
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Hire Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
