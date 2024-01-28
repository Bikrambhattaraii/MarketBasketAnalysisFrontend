import { Link } from "react-router-dom";
import "../styles/Landingpage.css";

import { Header } from "../component/Header";
export default function LandingPage() {
  const plansData = [
    {
      name: "Basic",
      price: "$19/month",
      features: ["1000 Transactions", "Email Support", "Basic Reporting"],
      buttonLabel: "choose a plan",
    },
    {
      name: "Pro",
      price: "$49/month",
      features: [
        "Unlimited Transactions",
        "Priority Email Support",
        "Advanced Reporting",
        "Item Recommendations",
      ],
      buttonLabel: "choose a plan",
    },
    {
      name: "Enterprise",
      price: "100rs/month",
      features: [
        "Custom Transactions",
        "24/7 Support",
        "Custom Reporting",
        "Item Recommendations",
        "Dedicated Account Manager",
      ],
      buttonLabel: "choose a plan",
    },
  ];

  return (
    <>
      <Header />
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
            {plansData.map((plan, index) => (
              <div key={index} className="plans-card">
                <h2>{plan.name}</h2>
                <p>{plan.price}</p>
                <ul>
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <button className="btn">{plan.buttonLabel}</button>
              </div>
            ))}
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
