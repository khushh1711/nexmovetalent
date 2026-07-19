import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Shield, Eye, Lock, Globe, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", label: "1. Introduction", icon: FileText },
  { id: "collection", label: "2. Information We Collect", icon: Eye },
  { id: "usage", label: "3. How We Use Information", icon: Shield },
  { id: "sharing", label: "4. Information Sharing", icon: Globe },
  { id: "security", label: "5. Data Security", icon: Lock },
];

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState("introduction");

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

  return (
    <>
      <Helmet>
        <title>Privacy Policy | NexMoveTalent</title>
        <meta
          name="description"
          content="NexMoveTalent's Privacy Policy describes how we collect, use, and protect candidate and client information across USA and Canada."
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
              Privacy Policy
            </h1>
            <p className="mt-4 text-base text-slate-500">
              Last Updated: July 18, 2026. This policy outlines our commitment to protecting your privacy and security across our hiring and digital platforms.
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
                
                {/* Introduction */}
                <div id="introduction" className="scroll-mt-32 pb-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <FileText className="text-emerald-600" size={24} />
                    1. Introduction
                  </h2>
                  <p className="mb-4">
                    Welcome to NexMoveTalent. We respect your privacy and are committed to protecting it through our compliance with this policy. This policy applies to information collected on our website (https://nexmovetalent.vercel.app/), client portal, email interactions, and candidate recruitment databases across both the United States and Canada.
                  </p>
                  <p>
                    Please read this policy carefully to understand our policies and practices regarding your information and how we will treat it. If you do not agree with our policies and practices, your choice is not to use our website or submit your details. By accessing or using our services, you agree to this privacy policy.
                  </p>
                </div>

                {/* Information We Collect */}
                <div id="collection" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Eye className="text-emerald-600" size={24} />
                    2. Information We Collect
                  </h2>
                  <p className="mb-4 font-semibold text-slate-800">
                    We collect several types of information from and about users of our website and recruitment services, including:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>
                      <strong>Personal Identifiers:</strong> Name, postal address, email address, telephone number, and social security number/social insurance number (only during official onboarding).
                    </li>
                    <li>
                      <strong>Professional & Employment Information:</strong> Resumes, CVs, employment history, education details, certification documents, skills data, and background check results.
                    </li>
                    <li>
                      <strong>Client Representative Data:</strong> Corporate email address, telephone numbers, organization name, and service inquiry requirements.
                    </li>
                    <li>
                      <strong>Technical Metadata:</strong> IP address, browser type, operating system, and tracking details collected via cookies and site metrics.
                    </li>
                  </ul>
                  <p>
                    We collect this information directly from you when you submit resumes, apply for roles, or contact us. We also collect info automatically through cookies and device analytics.
                  </p>
                </div>

                {/* How We Use Information */}
                <div id="usage" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Shield className="text-emerald-600" size={24} />
                    3. How We Use Information
                  </h2>
                  <p className="mb-4">
                    We use the information we collect to operate, evaluate, and improve our recruitment, software development, and consultancy services. Specifically, we use your data to:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Deliver recruitment and talent acquisition services to our clients and match candidates with appropriate roles.</li>
                    <li>Communicate with you regarding job opportunities, application status, or inquiries.</li>
                    <li>Process candidate onboarding documentation, legal certifications, and background checks.</li>
                    <li>Optimize our web application, system security, and analytics logs.</li>
                    <li>Comply with federal, state, provincial, and local laws, specifically including Equal Opportunity Employer guidelines in the USA and Canada.</li>
                  </ul>
                </div>

                {/* Information Sharing */}
                <div id="sharing" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Globe className="text-emerald-600" size={24} />
                    4. Information Sharing and Disclosure
                  </h2>
                  <p className="mb-4">
                    We do not sell, rent, or trade your personal information. We may disclose personal information that we collect or you provide as described in this policy:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>To potential employers/clients who have contracted with us to source talent. We share candidate profiles and resume records only after receiving explicit consent.</li>
                    <li>To sub-contractors or third-party service providers who assist us in verifying employment details, performing background screenings, or conducting technical assessments.</li>
                    <li>To government departments or regulatory authorities when required under law, including compliance with legal investigations.</li>
                    <li>To fulfill the purpose for which you provide it (e.g., if you submit information to apply for a role, we will share it with the respective HR leads).</li>
                  </ul>
                </div>

                {/* Data Security */}
                <div id="security" className="scroll-mt-32 pt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Lock className="text-emerald-600" size={24} />
                    5. Data Security & Rights
                  </h2>
                  <p className="mb-4">
                    We have implemented appropriate administrative, technical, and physical safeguards designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                  </p>
                  <p className="mb-4 font-semibold text-slate-800">
                    Your Rights under CCPA (California) & PIPEDA (Canada):
                  </p>
                  <p className="mb-6">
                    Depending on your location, you have rights regarding access, deletion, and corrections of your data. You may write to us at info@nexmovetalent.com to request access to, edit, or delete any personal information that you have provided to us.
                  </p>

                  <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Have any privacy questions?</h4>
                      <p className="text-sm text-slate-500">Our compliance team is ready to assist you with any inquiries.</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#091527] hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition duration-300 shadow-sm hover:shadow"
                    >
                      Contact Compliance
                      <ArrowRight size={16} />
                    </Link>
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

export default PrivacyPolicy;
