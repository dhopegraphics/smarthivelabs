import Link from "next/link";
import NewsletterForm from "@/components/newsletter-form"; // We'll create this

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className=" bg-background  text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-primary mb-2">
              Smart Hive Labs
            </h3>
            <p className="text-sm mb-1">Owned by Mensah Isaac Nana Sam</p>
            <p className="text-sm italic mb-2">
              (Public Brand: Dhope Graphics)
            </p>
            <p className="text-sm">
              &quot;Crafting Digital Excellence Through Innovation&quot;
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 flex-wrap   text-sm">
              <li>
                <Link href="/about" className="hover:text-primary">
                  About Us
                </Link>
              </li>
              <li className="hover:text-cyan-400">
                <Link
                  href="/services"
                  className=" dark:hover:text-cyan-600 hover:text-blue-900"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-primary">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Stay Updated</h4>
            <NewsletterForm />
          </div>
        </div>
        <div className="border-t border-neutral-300 dark:border-neutral-700 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Smart Hive Labs. All rights reserved.</p>
          <p className="mt-1">
            <Link href="/privacy-policy" className="hover:text-primary">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms-of-service" className="hover:text-primary">
              {" "}
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
