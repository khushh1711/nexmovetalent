import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
} from "lucide-react";
import logo from "../../assets/logo/NMT-logo-4.png";
import eVerifyLogo from "../../assets/logo/e-verify.jpg";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#091527] text-slate-200 pt-20 pb-10 border-t border-slate-800">
      <div className="w-full max-w-345 mx-auto px-6">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-slate-800">

          {/* Column 1: Company Info */}
          <div className="flex flex-col gap-6">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-white/95 p-2 px-3 rounded-xl inline-block max-w-max hover:bg-white transition-colors duration-300 shadow-sm"
            >
              <img
                src={logo}
                alt="NexMoveTalent Logo"
                className="h-10 w-auto object-contain"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-7">
              NexMoveTalent bridges the gap between elite professionals and visionary organizations across the United States and Canada. We specialize in IT staffing, Healthcare recruitment, and software engineering solutions.
            </p>

            {/* Contact Details */}
            <div className="flex flex-col gap-3 text-sm text-slate-400">
              <a
                href="mailto:careers@nexmovetalent.com"
                className="flex items-center gap-3 hover:text-emerald-500 transition-colors"
              >
                <Mail size={16} className="text-emerald-500 shrink-0" />
                careers@nexmovetalent.com
              </a>
              <a
                href="tel:+18005550199"
                className="flex items-center gap-3 hover:text-emerald-500 transition-colors"
              >
                <Phone size={16} className="text-emerald-500 shrink-0" />
                +1 (800) 555-0199
              </a>
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-emerald-500 shrink-0" />
                <span>USA & Canada (EST Office Hours)</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Sectors */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
              Sectors & Services
            </h4>
            <ul className="flex flex-col gap-3.5 text-sm text-slate-400">
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Information Technology
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Healthcare Staffing
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Core Professional Recruitment
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  className="hover:text-emerald-500 hover:translate-x-1.5 inline-block transition-all duration-300"
                >
                  Software Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-white font-semibold text-lg mb-6 relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-[2px] after:bg-emerald-500">
                Stay Connected
              </h4>
              <p className="text-slate-400 text-sm leading-6">
                Receive the latest talent market insights and job alerts directly in your inbox.
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email address"
                className="w-full bg-[#11223b] border border-slate-700 focus:border-emerald-500 focus:outline-none rounded-xl py-3.5 px-4 pr-12 text-sm text-white placeholder-slate-500 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 bg-emerald-600 hover:bg-emerald-500 text-white p-2 rounded-lg transition-colors cursor-pointer"
                aria-label="Subscribe"
              >
                <ArrowRight size={18} />
              </button>
            </form>

            {subscribed && (
              <p className="text-emerald-400 text-sm font-medium animate-pulse">
                ✓ Thanks for subscribing!
              </p>
            )}

            {/* Social Icons */}
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-400"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-400"
                aria-label="Twitter / X"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-400"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-xl bg-slate-800/80 border border-slate-700 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-all duration-300 hover:-translate-y-1 text-slate-400"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* EOE and Legal Statement */}
        <div className="py-8 text-xs text-slate-500 border-b border-slate-800 leading-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <div className="flex items-start gap-4 max-w-4xl">
            <Shield size={24} className="text-slate-600 shrink-0 md:mt-0.5" />
            <p>
              <strong>Equal Opportunity Employer (EOE):</strong> NexMoveTalent is committed to providing equal opportunities to all job seekers. All qualified candidates will receive consideration for employment without regard to race, color, religion, sex, sexual orientation, gender identity, national origin, age, disability status, veteran status, or any other characteristic protected by law.
            </p>
          </div>
          <div className="flex items-center gap-4 shrink-0 bg-white/95 p-3 rounded-2xl shadow-sm border border-slate-700/50">
            <img src={eVerifyLogo} alt="E-Verify Registered" className="h-10 w-auto object-contain" />
            <div className="text-[10px] text-slate-800 font-semibold leading-tight">
              E-Verify® Registered<br />
              <span className="text-slate-500 font-medium">Employment Verified</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {currentYear} NexMoveTalent. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-emerald-500 transition-colors">Cookie Settings</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;