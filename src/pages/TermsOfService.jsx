import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ShieldAlert, BookOpen, UserCheck, Scale, AlertCircle, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const sections = [
  { id: "acceptance", label: "1. Acceptance of Terms", icon: BookOpen },
  { id: "eligibility", label: "2. Eligibility & Accounts", icon: UserCheck },
  { id: "services", label: "3. Services Provision", icon: ShieldAlert },
  { id: "liability", label: "4. Limitation of Liability", icon: Scale },
  { id: "governing", label: "5. Governing Law", icon: AlertCircle },
];

const TermsOfService = () => {
  const [activeSection, setActiveSection] = useState("acceptance");

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
        <title>Terms of Service | NexMoveTalent</title>
        <meta
          name="description"
          content="NexMoveTalent's Terms of Service govern the use of our recruitment platform, website, and talent consultancy services in USA and Canada."
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
              Terms of Service
            </h1>
            <p className="mt-4 text-base text-slate-500">
              Last Updated: July 18, 2026. Please read these terms carefully before utilizing our staffing, software consulting, or recruitment applications.
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
                
                {/* Acceptance of Terms */}
                <div id="acceptance" className="scroll-mt-32 pb-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <BookOpen className="text-emerald-600" size={24} />
                    1. Acceptance of Terms
                  </h2>
                  <p className="mb-4">
                    By accessing or using the NexMoveTalent portal, website, and services, you agree to comply with and be bound by these Terms of Service. These terms constitute a legally binding agreement between you, whether personally or on behalf of an entity, and NexMoveTalent regarding your access to and use of our platform.
                  </p>
                  <p>
                    If you do not agree to all of these Terms of Service, you are expressly prohibited from using our site and services and must discontinue use immediately.
                  </p>
                </div>

                {/* Eligibility & Accounts */}
                <div id="eligibility" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <UserCheck className="text-emerald-600" size={24} />
                    2. Eligibility & User Representation
                  </h2>
                  <p className="mb-4">
                    The platform is intended for users seeking employment opportunities or recruitment staffing services in the United States and Canada. By using this service, you represent and warrant that:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>You are at least 18 years of age or have legal authority to enter into agreements.</li>
                    <li>All resume, profile, certification, and work authorisation info you submit is truthful, current, and accurate.</li>
                    <li>You will maintain the accuracy of such information and promptly update it when necessary.</li>
                    <li>Your use of our services does not violate any applicable law or regulation.</li>
                  </ul>
                </div>

                {/* Services Provision */}
                <div id="services" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <ShieldAlert className="text-emerald-600" size={24} />
                    3. Services Provision & Candidate Engagement
                  </h2>
                  <p className="mb-4">
                    NexMoveTalent operates as an intermediary recruitment agency matching qualified candidates with hiring organizations. We also provide direct software consultancy and professional career mentoring.
                  </p>
                  <p className="mb-4">
                    Please note that submitting an application, resume, or onboarding profile does not guarantee job placement, employment interviews, or specific contract offerings. Hiring decisions are solely at the discretion of the partner employers.
                  </p>
                  <p>
                    NexMoveTalent complies with Equal Opportunity Employer guidelines. All recruitment and placement metrics are processed without regard to race, color, religion, gender, sexual orientation, age, or disability.
                  </p>
                </div>

                {/* Limitation of Liability */}
                <div id="liability" className="scroll-mt-32 py-12 border-b border-slate-100">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <Scale className="text-emerald-600" size={24} />
                    4. Limitation of Liability
                  </h2>
                  <p className="mb-4">
                    In no event will NexMoveTalent, our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site or our placement services.
                  </p>
                  <p>
                    We do not guarantee the performance, integrity, or background of third-party hiring companies or clients, and we advise all candidates to perform standard diligence before accepting employment contracts.
                  </p>
                </div>

                {/* Governing Law */}
                <div id="governing" className="scroll-mt-32 pt-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <AlertCircle className="text-emerald-600" size={24} />
                    5. Governing Law & Disclaimers
                  </h2>
                  <p className="mb-4">
                    These Terms of Service and your use of our site are governed by and construed in accordance with the federal laws of the United States of America and Canada, alongside the state and provincial regulations of our local operating entities.
                  </p>
                  <p className="mb-6">
                    Our platform services are provided on an "as-is" and "as-available" basis. You agree that your use of the site services will be at your sole risk.
                  </p>

                  <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8">
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">Questions about our terms?</h4>
                      <p className="text-sm text-slate-500">Reach out to our legal department for structural definitions.</p>
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 bg-[#091527] hover:bg-slate-800 text-white font-semibold text-sm px-5 py-3 rounded-xl transition duration-300 shadow-sm hover:shadow"
                    >
                      Contact Support
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

export default TermsOfService;
