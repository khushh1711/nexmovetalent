import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ArrowLeft, 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  Briefcase, 
  HelpCircle,
  FileCheck,
  Compass
} from "lucide-react";
import { servicesData } from "../utils/serviceData";
import FadeInImage from "../components/common/FadeInImage";
import PageWrapper from "../components/common/PageWrapper";
import Button from "../components/common/Button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = servicesData[slug];
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Executive Overview" },
    { id: "capabilities", label: "Capabilities" },
    { id: "methodology", label: "Methodology" },
    { id: "sectors", label: "Target Sectors" },
    { id: "compliance", label: "Compliance & Security" },
    { id: "consultation", label: "Request Consultation" }
  ];

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

  // Listen to scroll to highlight active sidebar section
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

  // If service not found (placed after all hooks to comply with React rules)
  if (!service) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-3xl shadow-sm border border-slate-200 max-w-md">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Not Found</h2>
          <p className="text-slate-600 mb-8">The service program you are looking for does not exist or has been modified.</p>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl transition cursor-pointer"
          >
            <ArrowLeft size={16} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{`${service.title} | NexMoveTalent Service Details`}</title>
        <meta name="description" content={service.tagline} />
      </Helmet>

      {/* Hero Banner (Light theme matching global hierarchy) */}
      <section className="bg-slate-50 pt-32 pb-16 overflow-hidden border-b border-slate-200/50">
        <div className="w-full max-w-345 mx-auto px-6">
          <div className="mb-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-emerald-600 font-bold transition-colors text-sm"
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7">
              <span className="uppercase tracking-[3px] text-xs font-bold text-emerald-600">
                Corporate Capabilities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mt-5 leading-tight">
                {service.title}
              </h1>
              <p className="mt-4 text-lg font-semibold text-emerald-600">
                {service.tagline}
              </p>
              
              {/* Regional Stats grid */}
              <div className="grid grid-cols-3 gap-6 mt-10 pt-8 border-t border-slate-200/60 max-w-xl">
                {service.stats.map((stat, idx) => (
                  <div key={idx}>
                    <p className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-none">{stat.value}</p>
                    <p className="text-xs text-slate-500 mt-2 font-bold uppercase tracking-wider">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Visual */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-emerald-500/5 rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
              <FadeInImage
                src={service.image}
                alt={service.title}
                className="w-full h-80 md:h-96 object-cover rounded-3xl shadow-xl border border-slate-200/60 relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Corporate Service Details Body */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-345 mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-12 items-start">
            
            {/* Left Column: Sticky Section Navigation */}
            <aside className="lg:col-span-1 lg:sticky lg:top-28 hidden lg:block bg-slate-50 border border-slate-200/60 p-6 rounded-3xl shadow-sm">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-3">Service Index</h3>
              <nav className="space-y-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                      activeSection === sec.id
                        ? "bg-emerald-500 text-white shadow-xs"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`}
                  >
                    {sec.label}
                  </button>
                ))}
              </nav>
            </aside>

            {/* Right Column: In-Depth Service Detail Contents */}
            <div className="lg:col-span-3 space-y-24">
              
              {/* Section 1: Executive Overview */}
              <div id="overview" className="scroll-mt-28">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 border border-emerald-200 bg-emerald-50/50 px-2.5 py-1 rounded-md">
                  01 / Overview
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-6">
                  {service.overview.heading}
                </h2>
                <div className="text-slate-600 space-y-6 leading-8 text-base md:text-lg">
                  <p>{service.overview.paragraph1}</p>
                  <p>{service.overview.paragraph2}</p>
                </div>
              </div>

              {/* Section 2: Detailed Capabilities */}
              <div id="capabilities" className="scroll-mt-28">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 border border-emerald-200 bg-emerald-50/50 px-2.5 py-1 rounded-md">
                  02 / Capabilities
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-8">
                  Core Sourcing & Assessment Capabilities
                </h2>
                <div className="grid gap-6">
                  {service.capabilities.map((cap, idx) => {
                    const Icon = cap.icon;
                    return (
                      <div key={idx} className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl flex gap-6 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                          <Icon size={22} className="stroke-[1.8px]" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">{cap.title}</h3>
                          <p className="text-slate-600 text-sm leading-7">{cap.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Section 3: Process & Timeline */}
              <div id="methodology" className="scroll-mt-28 bg-slate-50/50 border border-slate-100 p-8 md:p-10 rounded-3xl">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 border border-emerald-200 bg-emerald-50/50 px-2.5 py-1 rounded-md">
                  03 / Process Flow
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-8">
                  Search & Placement Timeline
                </h2>
                <div className="relative border-l-2 border-slate-200 ml-4 pl-8 space-y-10">
                  {service.process.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* Timeline Dot Indicator */}
                      <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-emerald-500 flex items-center justify-center text-[10px] text-emerald-600 font-bold z-10 shadow-xs">
                        {step.step}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500 text-sm leading-7">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 4: Target Sectors & Roles */}
              <div id="sectors" className="scroll-mt-28">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-600 border border-emerald-200 bg-emerald-50/50 px-2.5 py-1 rounded-md">
                  04 / Target Markets
                </span>
                <h2 className="text-3xl font-bold text-slate-900 mt-4 mb-8">
                  Market Coverage & Sample Positions
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Sectors Column */}
                  <div className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <Briefcase size={18} className="text-emerald-500" />
                      Industries Served
                    </h3>
                    <ul className="space-y-4">
                      {service.sectors.map((sector, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-semibold">
                          <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                          <span>{sector}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sample Roles Column */}
                  <div className="bg-slate-50 border border-slate-200/50 p-8 rounded-3xl">
                    <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <HelpCircle size={18} className="text-emerald-500" />
                      Sample Roles Placed
                    </h3>
                    <ul className="space-y-4">
                      {service.roles.map((role, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-2"></span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 5: Compliance & Security */}
              <div id="compliance" className="scroll-mt-28 bg-[#090d16] border border-slate-800 p-8 md:p-10 rounded-3xl text-white relative overflow-hidden shadow-xl">
                {/* Tech glowing background detail */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="relative z-10">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400 border border-emerald-800 bg-emerald-950/40 px-2.5 py-1 rounded-md">
                    05 / Risk Compliance
                  </span>
                  <h2 className="text-2xl font-bold mt-4 mb-6 flex items-center gap-2.5">
                    <ShieldCheck size={26} className="text-emerald-400" />
                    {service.compliance.heading}
                  </h2>
                  <p className="text-slate-300 leading-8 text-sm md:text-base">
                    {service.compliance.text}
                  </p>
                </div>
              </div>

              {/* Section 6: Request Consultation / CTA */}
              <div id="consultation" className="scroll-mt-28 pt-8">
                <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 text-center px-8 md:px-12 py-16 relative overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 pointer-events-none"></div>
                  
                  <div className="relative z-10 max-w-2xl mx-auto">
                    <h2 className="text-3xl font-bold text-white leading-tight">
                      Ready to Scale Your Workforce?
                    </h2>
                    <p className="text-slate-300 mt-4 text-sm leading-7">
                      Connect directly with our regional recruitment consultants in the USA and Canada. We will customize a contingent or permanent search program built to fulfill your requirements.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                      <Button onClick={() => navigate(`/contact?role=candidate&service=${slug}#contact-form`)}>
                        Apply as Candidate
                      </Button>
                      <Button variant="secondary" onClick={() => navigate(`/contact?role=employer&service=${slug}#contact-form`)}>
                        Hire Talent Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default ServiceDetail;
