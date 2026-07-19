import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion, AnimatePresence } from "framer-motion";
import { Info, Shield, ToggleLeft, RefreshCw, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "../components/common/Button";

const sections = [
  { id: "about", label: "1. About Cookies", icon: Info },
  { id: "types", label: "2. Types of Cookies We Use", icon: Shield },
  { id: "management", label: "3. Managing Your Choices", icon: ToggleLeft },
];

const CookiePolicy = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [resetSuccess, setResetSuccess] = useState(false);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 100;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleResetPreferences = () => {
    localStorage.removeItem("cookie-consent-nmt");
    setResetSuccess(true);
    setTimeout(() => {
      window.location.reload();
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Cookie Policy | NexMoveTalent</title>
        <meta
          name="description"
          content="NexMoveTalent's Cookie Policy details cookie usage and preferences configuration for candidates and hiring partners."
        />
      </Helmet>

      {/* Hero Banner */}
      <section className="bg-slate-50 pt-32 pb-16 overflow-hidden border-b border-slate-200/50">
        <div className="w-full max-w-345 mx-auto px-6">
          <div className="mb-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 font-semibold transition"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-3 py-1 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
              <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                Legal Center
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900">
              Cookie Policy
            </h1>
            <p className="mt-4 text-base text-slate-500">
              Last Updated: July 18, 2026. Learn how we use cookies and trackers to optimize our global staffing platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-345 mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Sidebar Navigation */}
            <div className="lg:w-1/4 shrink-0 lg:sticky lg:top-28 lg:h-fit">
              <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-3xl">
                <h3 className="font-bold text-slate-900 text-lg mb-6">Quick Navigation</h3>
                <nav className="flex flex-col gap-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeSection === section.id;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`flex items-center gap-3 w-full text-left px-4 py-3 rounded-xl transition duration-300 font-medium text-sm cursor-pointer ${
                          isActive
                            ? "bg-emerald-50 border border-emerald-100 text-emerald-600"
                            : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/50"
                        }`}
                      >
                        <Icon size={16} className={isActive ? "text-emerald-500" : "text-slate-400"} />
                        {section.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Document Content */}
            <div className="lg:w-3/4 max-w-4xl">
              <div className="prose prose-slate max-w-none text-slate-600 leading-8">
                
                {/* About Cookies */}
                <div id="about" className="scroll-mt-32 pb-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Info className="text-emerald-600" size={24} />
                    1. About Cookies
                  </h2>
                  <p className="mb-4">
                    A cookie is a small text file containing a string of alphanumeric characters that is placed on your web browser or hard drive by the web servers you visit. It helps us remember details about your visit and configure optimized layouts.
                  </p>
                  <p>
                    We use session cookies (which disappear after you close your browser) and persistent cookies (which remain on your device until deleted or expired) to customize recruitment matches, secure login sessions, and track application flows.
                  </p>
                </div>

                {/* Types of Cookies */}
                <div id="types" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Shield className="text-emerald-600" size={24} />
                    2. Types of Cookies We Use
                  </h2>
                  <p className="mb-6">
                    Our platform divides cookies into the following operational groups:
                  </p>

                  <div className="space-y-6">
                    <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-2">Essential Cookies</h4>
                      <p className="text-sm leading-6">
                        These cookies are strictly required to navigate our website, load applicant forms, and secure authentication tokens. Disabling these cookies in your browser settings will break core platform features.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-2">Performance & Analytics Cookies</h4>
                      <p className="text-sm leading-6">
                        These cookies help us analyze visitor interactions, traffic patterns, and recruitment pipeline activity across our platform. They do not store identifying details and compile metrics in anonymous formats.
                      </p>
                    </div>

                    <div className="bg-slate-50/50 border border-slate-100 p-6 rounded-2xl">
                      <h4 className="font-bold text-slate-900 mb-2">Preferences Cookies</h4>
                      <p className="text-sm leading-6">
                        We use preference cookies to remember choices you make (such as language configurations, location filters, or form draft savings) to provide a tailored user experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Managing Your Choices */}
                <div id="management" className="scroll-mt-32 pt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <ToggleLeft className="text-emerald-600" size={24} />
                    3. Managing Your Choices
                  </h2>
                  <p className="mb-6">
                    You have the right to decide whether to accept or decline cookie categories. You can set or edit your web browser controls to accept or refuse cookies.
                  </p>

                  <div className="bg-slate-50 border border-emerald-100/50 p-8 rounded-3xl mt-8 relative overflow-hidden">
                    <div className="absolute right-0 top-0 translate-x-8 -translate-y-8 text-emerald-50 opacity-[0.05]">
                      <ToggleLeft size={160} />
                    </div>
                    
                    <h3 className="font-bold text-slate-900 text-xl mb-2">Cookie Settings Panel</h3>
                    <p className="text-sm text-slate-500 mb-6 max-w-xl">
                      If you accepted our cookie policy previously, you can reset your preferences. This will clean your configuration choice and relaunch the consent banner immediately upon refresh.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <Button
                        onClick={handleResetPreferences}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl cursor-pointer"
                        disabled={resetSuccess}
                      >
                        {resetSuccess ? (
                          <>
                            <CheckCircle size={16} />
                            Reset Successfully!
                          </>
                        ) : (
                          <>
                            <RefreshCw size={16} className="animate-spin-slow" />
                            Reset Cookie Preferences
                          </>
                        )}
                      </Button>
                    </div>

                    <AnimatePresence>
                      {resetSuccess && (
                        <motion.p
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0 }}
                          className="text-xs text-emerald-600 font-semibold mt-3"
                        >
                          Preferences cleared. Reloading page to present consent banner...
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default CookiePolicy;
