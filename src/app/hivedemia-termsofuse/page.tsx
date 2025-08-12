import {
  FileText,
  CheckSquare,
  Bot,
  UserCheck,
  AlertTriangle,
  XCircle,
  RefreshCw,
  Mail,
  Phone,
  BookOpen,
} from "lucide-react";

export default function HivedemiaTermsOfUse() {
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
          <FileText className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Hivedemia Terms of Use</h1>
        <p className="text-gray-600">
          Last Updated: {currentDate}
        </p>
      </div>

      {/* Introduction */}
      <div className="prose max-w-none mb-10">
        <p className="text-lg">
          Welcome to Hivedemia, your AI-powered academic assistant. By using our
          app, you agree to these Terms of Use:
        </p>
      </div>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 1: Purpose of the App */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <BookOpen className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">1. Purpose of the App</h2>
        </div>

        <p className="mb-4">Hivedemia provides AI tools to help students:</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <div className="bg-green-100 bg-green-50 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 text-green-600"
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
            <p className="text-gray-700">
              Generate quizzes
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 bg-green-50 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 text-green-600"
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
            <p className="text-gray-700">
              Summarize academic materials
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 bg-green-50 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 text-green-600"
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
            <p className="text-gray-700">
              Solve problems through Snap & Solve
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-green-100 bg-green-50 p-1 rounded mr-3 mt-0.5">
              <svg
                className="h-4 w-4 text-green-600 text-green-600"
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
            <p className="text-gray-700">
              Organize study resources
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-gray-700">
            The app is for educational support only and does not guarantee
            academic success.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 2: Acceptable Use */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <UserCheck className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">2. Acceptable Use</h2>
        </div>

        <p className="mb-4">You agree to:</p>

        <div className="space-y-3 mb-6">
          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded mr-3 mt-0.5">
              <CheckSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <p className="text-gray-700">
              Use the app for lawful, educational purposes only
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded mr-3 mt-0.5">
              <CheckSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <p className="text-gray-700">
              Not misuse AI features for unethical academic conduct (e.g.,
              cheating)
            </p>
          </div>

          <div className="flex items-start">
            <div className="bg-indigo-100 dark:bg-indigo-900/30 p-1 rounded mr-3 mt-0.5">
              <CheckSquare className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            </div>
            <p className="text-gray-700">
              Not upload harmful, illegal, or offensive content
            </p>
          </div>
        </div>

        <div className="bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 dark:border-amber-700 p-4">
          <p className="text-amber-800 dark:text-amber-300 font-medium">
            We reserve the right to suspend accounts that violate these terms.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 3: AI-Generated Content */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Bot className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">3. AI-Generated Content</h2>
        </div>

        <p className="mb-4 text-gray-700">
          Hivedemia uses AI to provide suggestions, summaries, or quiz
          questions. AI results:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-6">
          <li>Are generated based on your inputs</li>
          <li>May not always be 100% accurate</li>
          <li>Should be reviewed and used at your own discretion</li>
        </ul>

        <div className="bg-blue-100 dark:bg-blue-900/30 border-l-4 border-blue-500 dark:border-blue-700 p-4">
          <p className="text-blue-800 dark:text-blue-300 font-medium">
            We are not liable for decisions made based on AI outputs.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 4: Account & Data */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <UserCheck className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">4. Account & Data</h2>
        </div>

        <p className="text-gray-700 mb-4">
          You may need an account to access some features. You are responsible
          for keeping your account secure.
        </p>

        <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded-lg">
          <p className="text-indigo-800 dark:text-indigo-300">
            We respect your privacy — see our{" "}
            <a href="/hivedemia-privacy" className="underline font-medium">
              Privacy Policy
            </a>{" "}
            for full details.
          </p>
        </div>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 5: Limitation of Liability */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <AlertTriangle className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">5. Limitation of Liability</h2>
        </div>

        <p className="mb-4 text-gray-700">
          Hivedemia provides tools &quot;as-is&quot; without guarantees. We are
          not responsible for:
        </p>

        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>Loss of academic materials</li>
          <li>Incorrect AI-generated suggestions</li>
          <li>Damages resulting from misuse of the app</li>
        </ul>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 6: Termination */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <XCircle className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">6. Termination</h2>
        </div>

        <p className="text-gray-700">
          We may suspend access if you violate these Terms or misuse the
          platform.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 7: Changes to Terms */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <RefreshCw className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">7. Changes to Terms</h2>
        </div>

        <p className="text-gray-700">
          We may update these Terms as needed. Continued use means you accept
          updates.
        </p>
      </section>

      <hr className="border-neutral-200 dark:border-neutral-800 my-10" />

      {/* Section 8: Contact */}
      <section className="mb-10">
        <div className="flex items-center mb-6">
          <Mail className="h-6 w-6 text-indigo-500 mr-3" />
          <h2 className="text-2xl font-bold">8. Contact</h2>
        </div>

        <p className="mb-6 text-gray-700">
          For questions:
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
