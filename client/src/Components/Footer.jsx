import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#00ccb2] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold">Nexaro</h2>
          <p className="mt-2">
            Nexaro is your go-to online store for the latest fashion trends. We
            offer a wide range of products to suit your style and budget.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Customer Service</h2>
          <ul className="mt-2">
            <li>
              <a href="/" className="hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Shipping & Delivery
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Order Tracking
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Payment Methods
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold">Stay Connected</h2>
          <form className="mt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full text-gray-700"
            />
            <button
              type="submit"
              className="bg-white text-[#00ccb2] px-4 py-2 mt-2 w-full font-bold"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/Jyotikeshri"
              className="hover:underline"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/jyotikeshri/"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-200">
        <p>&copy; 2024 Nexaro. All rights reserved.</p>
        <p className="mt-2">
          <a href="/" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/" className="hover:underline">
            {" "}
            Terms & Conditions
          </a>{" "}
          |
          <a href="/" className="hover:underline">
            {" "}
            Cookie Policy
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
