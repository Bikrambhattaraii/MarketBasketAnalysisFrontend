import { Link } from "react-router-dom";
import "../styles/Landingpage.css";

export default function LandingPage() {
  return (
    <>
      <section className="container-landing-page-mainpage">
        <div>
          <div>
            <div>
              <h1>Welcome to Market Basket Analysis Platform</h1>
              <p>
                Uncover hidden trends and patterns in your sales data. Our
                platform uses advanced market basket analysis to help you
                understand customer buying behavior and optimize your marketing
                strategies.
              </p>
            </div>
            <div className="container-login-register">
              <Link to="/guest/login" href="#">
                Login
              </Link>
              <Link to="/guest/register" href="#">
                Register
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container-pricing-plans">
        <div>
          <div>
            <div>
              <h2>Pricing Plans</h2>
              <p>
                Choose a plan that suits your needs. Whether you're a small
                business or a large enterprise, we've got you covered.
              </p>
            </div>
          </div>
          <div className="plans-container">
            <div className="basic-plans">
              <div>
                <h2>Basic</h2>
                <p>$19/month</p>
                <ul>
                  <li>1000 Transactions</li>
                  <li>Email Support</li>
                  <li>Basic Reporting</li>
                </ul>
              </div>
            </div>

            <div>
              <div className="pro-plans">
                <h2>Pro</h2>
                <p>$49/month</p>
                <ul>
                  <li>Unlimited Transactions</li>
                  <li>Priority Email Support</li>
                  <li>Advanced Reporting</li>
                  <li>Item Recommendations</li>
                </ul>
              </div>
            </div>
            <div className="enterprise-plans">
              <div>
                <h2>Enterprise</h2>
                <p>Contact Us</p>
                <ul>
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
      <section className="container-how-to-use">
        <div>
          <div>
            <div>
              <h2>How to Use Our Platform</h2>
              <p>
                Get started with our platform in just a few simple steps. Follow
                our guide to learn how to analyze your sales data and uncover
                valuable insights.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <h2>Step 1: Register</h2>
                <p>
                  Create an account to access our platform. Choose a pricing
                  plan that suits your needs.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h2>Step 2: Upload Data</h2>
                <p>
                  Upload your sales data in CSV format. Our platform supports
                  large datasets.
                </p>
              </div>
            </div>

            <div>
              <div>
                <h2>Step 3: Analyze</h2>
                <p>
                  Use our platform to analyze your data. Uncover hidden trends
                  and patterns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-join-team">
        <div>
          <div>
            <div>
              <h2>Ready to Get Started?</h2>
              <p>
                Join our platform today and start uncovering hidden insights in
                your sales data.
              </p>
            </div>
            <div>
              <Link to="/guest/register" href="#">
                Register
              </Link>
              <Link to="/guest/login" href="#">
                Login
              </Link>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>© 2024 Market Basket Analysis. All rights reserved.</p>
        <nav>
          <Link href="#">Terms of Service</Link>
          <Link href="#">Privacy</Link>
        </nav>
      </footer>
    </>
  );
}
