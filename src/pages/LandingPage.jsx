
import {Link} from "react-router-dom"

export default function LandingPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Welcome to Market Basket Analysis Platform
              </h1>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Uncover hidden trends and patterns in your sales data. Our
                platform uses advanced market basket analysis to help you
                understand customer buying behavior and optimize your marketing
                strategies.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link to="/guest/login"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Login
              </Link>
              <Link to="/guest/register"
                className="inline-flex h-10 items-center justify-center rounded-md border text-white border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-purple-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-green-100 dark:bg-purple-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-5xl">
                Pricing Plans
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Choose a plan that suits your needs. Whether you're a small
                business or a large enterprise, we've got you covered.
              </p>
            </div>
          </div>
         <div className="mt-4 mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
  <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Basic</h2>
      <p className="text-lg font-semibold mb-4">$19/month</p>
      <ul className="list-disc list-inside">
        <li>1000 Transactions</li>
        <li>Email Support</li>
        <li>Basic Reporting</li>
      </ul>
    </div>
  </div>

  <div className="bg-white  shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Pro</h2>
      <p className="text-lg font-semibold mb-4">$49/month</p>
      <ul className="list-disc list-inside">
        <li>Unlimited Transactions</li>
        <li>Priority Email Support</li>
        <li>Advanced Reporting</li>
        <li>Item Recommendations</li>
      </ul>
    </div>
  </div>

  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-2">Enterprise</h2>
      <p className="text-lg font-semibold mb-4">Contact Us</p>
      <ul className="list-disc list-inside">
        <li>Custom Transactions</li>
        <li>24/7 Support</li>
        <li>Custom Reporting</li>
        <li>Item Recommendations</li>
        <li>Dedicated Account Manager</li>
      </ul>
    </div>
  </div>
</div>

        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                How to Use Our Platform
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Get started with our platform in just a few simple steps. Follow
                our guide to learn how to analyze your sales data and uncover
                valuable insights.
              </p>
            </div>
          </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
  <div className="bg-white dark:bg-purple-800 shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl text-white  font-bold mb-2">Step 1: Register</h2>
      <p className="text-gray-500 dark:text-gray-400">
        Create an account to access our platform. Choose a pricing plan that suits your needs.
      </p>
    </div>
  </div>

  <div className="bg-white dark:bg-purple-800 shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl text-white  font-bold mb-2">Step 2: Upload Data</h2>
      <p className="text-gray-500 dark:text-gray-400">
        Upload your sales data in CSV format. Our platform supports large datasets.
      </p>
    </div>
  </div>

  <div className="bg-white dark:bg-purple-800 shadow-lg rounded-lg overflow-hidden">
    <div className="p-6">
      <h2 className="text-2xl text-white font-bold mb-2">Step 3: Analyze</h2>
      <p className="text-gray-500 dark:text-gray-400">
        Use our platform to analyze your data. Uncover hidden trends and patterns.
      </p>
    </div>
  </div>
</div>

        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-purple-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl text-white  font-bold tracking-tighter sm:text-5xl">
                Ready to Get Started?
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join our platform today and start uncovering hidden insights in
                your sales data.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Link to="/guest/register"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Register
              </Link>
              <Link to="/guest/login"
                className="inline-flex h-10 items-center justify-center rounded-md border  border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50  dark:border-gray-800  dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                href="#"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
         <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Market Basket Analysis. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        </footer>
    </>
  );
>>>>>>> 2ff243a821487486bf585c8400894f28a0c1441a
}
