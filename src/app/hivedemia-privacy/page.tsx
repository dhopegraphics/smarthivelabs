import {
  Shield,
  FileText,
  Upload,
  BarChart3,
  Database,
  Users,
  Lock,
  RefreshCw,
  Mail,
  Phone,
} from "lucide-react";

export default function HivedemiaPrivacyPolicy() {
  const currentDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <div className="inline-flex items-center justify-center p-3 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
          <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hivedemia Privacy Policy</h1>
        <p className="text-neutral-600 dark:text-neutral-400">
          Last Updated: {currentDate}
        </p>
      </div>

      {/* Introduction */}
      <div className="prose dark:prose-invert max-w-none mb-10">
        <p className="text-lg">
          At Hivedemia, we value your privacy. This policy explains how we
          handle your data when you use our mobile app, available on Android and
          iOS.
        </p>
      </div>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 1: Information We Collect */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <FileText className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">1. Information We Collect</h2>
        </div>

        <p className="mb-4">
          We only collect limited information necessary to provide AI-powered
          educational features:
        </p>

        <div className="pl-5 mb-6">
          <h3 className="font-semibold text-xl mb-2">
            a) User-Provided Content:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Documents or lecture slides you upload</li>
            <li>Images you provide (e.g., for Snap & Solve)</li>
            <li>Text-based prompts you submit</li>
          </ul>
        </div>

        <div className="pl-5">
          <h3 className="font-semibold text-xl mb-2">
            b) Automatically Collected Information:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-neutral-700 dark:text-neutral-300">
            <li>Device type, operating system (for improving performance)</li>
            <li>Usage data (non-personal, aggregated statistics)</li>
          </ul>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg mt-6">
          <p className="text-neutral-700 dark:text-neutral-300 italic">
            We do not collect personal identifiers such as names, contact
            details, or location unless explicitly provided by you (e.g., via
            account creation).
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 2: How We Use Your Information */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Upload className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">2. How We Use Your Information</h2>
        </div>

        <p className="mb-4">
          We use your data solely to deliver Hivedemia&apos;s core features:
        </p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Generating AI-powered quizzes from your notes
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Summarizing documents or lecture slides
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Processing images to assist with problem-solving
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Improving app performance and user experience
            </p>
          </div>
        </div>

        <div className="bg-neutral-100 dark:bg-neutral-800 p-4 rounded-lg">
          <p className="text-neutral-700 dark:text-neutral-300">
            All AI-generated responses are produced based on the data you
            submit. We do not use your content for any other purpose.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 3: Data Storage & Retention */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Database className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">3. Data Storage & Retention</h2>
        </div>

        <ul className="list-disc pl-6 space-y-3 text-neutral-700 dark:text-neutral-300">
          <li>
            Your uploaded content is processed temporarily to generate results.
          </li>
          <li>
            We do not permanently store your documents, images, or prompts
            unless you explicitly choose to save them (e.g., saved quizzes,
            materials).
          </li>
          <li>
            Data saved by you remains accessible within the app until you delete
            it.
          </li>
        </ul>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 4: Third-Party Services */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">4. Third-Party Services</h2>
        </div>

        <p className="mb-4 text-neutral-700 dark:text-neutral-300">
          We may use trusted AI service providers (e.g., OpenAI, Gemini, Claude)
          to process your content. These services operate under strict privacy
          standards.
        </p>

        <div className="bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 dark:border-amber-700 p-4">
          <p className="text-amber-800 dark:text-amber-300 font-medium">
            We do not sell or share your personal data with advertisers or
            unauthorized third parties.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 5: Your Rights & Choices */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <BarChart3 className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">5. Your Rights & Choices</h2>
        </div>

        <p className="mb-4">You can:</p>

        <div className="space-y-3">
          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Choose whether to save generated content
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Delete your saved data at any time
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              Decline permissions (e.g., Camera, File Access), but some features
              may not work
            </p>
          </div>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 6: Security */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Lock className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">6. Security</h2>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300">
          We use industry-standard security to protect your data, including
          encryption of content in transit. However, no system is 100% secure —
          use the app responsibly.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 7: Children's Privacy */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Users className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">7. Children&apos;s Privacy</h2>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300">
          Hivedemia is designed for students aged 13 and above. We do not
          knowingly collect data from children under 13.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 8: Updates to This Policy */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <RefreshCw className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">8. Updates to This Policy</h2>
        </div>

        <p className="text-neutral-700 dark:text-neutral-300">
          We may update this policy to reflect changes in our practices.
          Continued use of Hivedemia means you accept these changes.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 9: Contact Us */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Mail className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">9. Contact Us</h2>
        </div>

        <p className="mb-6 text-neutral-700 dark:text-neutral-300">
          For questions about this policy, reach out:
        </p>

        <div className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-center justify-center text-center sm:text-left">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
              <Mail className="h-5 w-5 text-indigo-500 mr-2" />
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                Email
              </span>
            </div>
            <a
              href="mailto:support@smarthivelabs.dev"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              support@smarthivelabs.dev
            </a>
          </div>

          <div className="h-10 w-px bg-neutral-300 dark:bg-neutral-700 hidden sm:block"></div>

          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center mb-2">
              <Phone className="h-5 w-5 text-indigo-500 mr-2" />
              <span className="text-neutral-900 dark:text-neutral-100 font-medium">
                Phone
              </span>
            </div>
            <a
              href="tel:+233597959032"
              className="text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              +233 597959032
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
