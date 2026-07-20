import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Mail,
    Phone,
    Clock3,
    Globe,
    CheckCircle,
    Loader2,
    Send,
    Compass,
    FileText,
    Handshake,
    AlertCircle
} from "lucide-react";

import Button from "../components/common/Button";
import { Helmet } from "react-helmet-async";
import WorldMap from "../components/common/WorldMap";
import FadeInImage from "../components/common/FadeInImage";
import { sendContactEmail } from "../utils/emailService";

// Images
import heroImg from "../assets/images/hero/contact-1.jpg";

const contactCards = [
    {
        icon: Mail,
        title: "Email",
        value: "info@nexmovetalent.com",
        href: "mailto:info@nexmovetalent.com",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (800) 555-0199",
        href: "tel:+18005550199",
    },
    {
        icon: Clock3,
        title: "Office Hours",
        value: "Mon–Fri 9AM – 6PM EST",
    },
    {
        icon: Globe,
        title: "Primary Markets",
        value: "United States & Canada",
    },
];

const faqs = [
    {
        question: "How quickly will someone contact me?",
        answer: "Our recruitment team usually responds within one business day."
    },
    {
        question: "Do you charge candidates?",
        answer: "Standard recruitment and candidate matching services are completely free. We only charge for our optional, structured preparation and bootcamp plans (Core, Prime, Pro) which offer personalized resume enhancements, dedicated training, and direct career manager assistance."
    },
    {
        question: "Can fresh graduates apply?",
        answer: "Absolutely. We regularly place fresh graduates into entry-level positions."
    },
    {
        question: "Do you help with interview preparation?",
        answer: "Yes. Our recruiters provide interview guidance before your interviews."
    },
    {
        question: "Which countries do you recruit for?",
        answer: "Primarily United States and Canada."
    }
];

const Contact = () => {
    const location = useLocation();

    // Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        location: "",
        message: ""
    });

    const [status, setStatus] = useState({
        loading: false,
        success: false,
        error: null
    });

    useEffect(() => {
        // Parse Query Params to Prefill Form
        const params = new URLSearchParams(location.search);
        const role = params.get("role");
        const plan = params.get("plan");

        let messageText = "";
        if (role === "candidate") {
            messageText = "Hi NexMoveTalent team,\n\nI would like to submit my profile for candidate recruitment opportunities in North America. Please let me know the next steps.";
            if (plan) {
                const planTitle = plan === "core" ? "Core (US$1,000 + 12%)"
                    : plan === "prime" ? "Prime (US$2,500 + 10%)"
                        : "Pro (US$7,500 One-Time)";
                messageText = `Hi NexMoveTalent team,\n\nI want to enroll in the "${planTitle}" program. Please contact me with details on how to proceed.`;
            }
        } else if (role === "employer") {
            messageText = "Hi NexMoveTalent team,\n\nWe are looking to partner with your staffing agency to hire professionals for our team. Let's schedule a call.";
        }

        if (messageText) {
            setFormData(prev => ({ ...prev, message: messageText }));
        }

        // Scroll to form if hash or parameters are present
        if (window.location.hash === "#contact-form" || role || plan) {
            setTimeout(() => {
                const el = document.getElementById("contact-form");
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
            alert("Please fill in Name, Email, and Message fields.");
            return;
        }

        setStatus({ loading: true, success: false, error: null });

        try {
            await sendContactEmail(formData);
            setStatus({ loading: false, success: true, error: null });
            setFormData({
                name: "",
                email: "",
                phone: "",
                location: "",
                message: ""
            });

            // Clear success notification after 5 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);
        } catch (err) {
            setStatus({ loading: false, success: false, error: err.message || "Failed to send email." });
            
            // Clear error notification after 8 seconds
            setTimeout(() => {
                setStatus(prev => ({ ...prev, error: null }));
            }, 8000);
        }
    };

    const scrollToForm = () => {
        const el = document.getElementById("contact-form");
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | NexMoveTalent</title>
                <meta
                    name="description"
                    content="Contact NexMoveTalent for career opportunities, recruitment support and staffing solutions across USA and Canada."
                />
            </Helmet>

            {/* ==========================================
                  HERO SECTION
            ========================================== */}
            <section className="bg-white pt-24 pb-24 overflow-hidden">
                <div className="w-full max-w-345 mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >
                            <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">
                                Contact Us
                            </span>
                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-6">
                                Let's Build Your
                                <br />
                                <span className="text-emerald-500">
                                    Career Together.
                                </span>
                            </h1>
                            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">
                                Your professional journey deserves a dedicated partner.
                                Whether you're searching for your next opportunity or
                                exploring career growth, our team is ready to help.
                            </p>
                            <div className="mt-10 flex gap-4 flex-wrap">
                                <Button onClick={scrollToForm}>
                                    Apply Now
                                </Button>
                                <Button variant="secondary" onClick={scrollToForm}>
                                    Contact Team
                                </Button>
                            </div>
                            <div className="mt-10 flex flex-wrap gap-8">
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span className="text-slate-600">24-Hour Response</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span className="text-slate-600">Career Guidance</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle size={18} className="text-emerald-500" />
                                    <span className="text-slate-600">Trusted Partner</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <FadeInImage
                                src={heroImg}
                                alt="Contact NexMoveTalent"
                                className="w-full h-130 object-cover rounded-3xl shadow-2xl"
                            />
                            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-5">
                                <h3 className="text-3xl font-bold text-slate-900">98%</h3>
                                <p className="text-slate-500">Candidate Satisfaction</p>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* ==========================================
                  CONTACT CARDS
            ========================================== */}
            <section className="pb-20 bg-white">
                <div className="w-full max-w-345 mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {contactCards.map((card, index) => {
                            const Icon = card.icon;
                            const isLink = !!card.href;

                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: .5 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl transition"
                                >
                                    <Icon className="text-emerald-500 mb-4" size={26} />
                                    <h3 className="font-semibold text-slate-900">{card.title}</h3>
                                    {isLink ? (
                                        <a href={card.href} className="text-emerald-600 hover:text-emerald-700 hover:underline mt-2 inline-block transition-colors font-medium text-sm">
                                            {card.value}
                                        </a>
                                    ) : (
                                        <p className="text-slate-600 mt-2 text-sm">{card.value}</p>
                                    )}
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ==========================================
                  CONTACT FORM
            ========================================== */}
            <section id="contact-form" className="pb-24 bg-white scroll-mt-28">
                <div className="w-full max-w-345 mx-auto px-6">
                    <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-xl">

                        {/* Left Info Panel */}
                        <div className="bg-slate-900 text-white p-12 relative">
                            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>

                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold">
                                    Let's Talk About
                                    <br />
                                    Your Future
                                </h2>
                                <p className="mt-6 text-slate-300 leading-8">
                                    Whether you're looking for your next challenge,
                                    exploring opportunities, or seeking career guidance,
                                    our experts are ready to help.
                                </p>
                                <div className="mt-10 space-y-5">
                                    <div className="flex gap-3 items-center">
                                        <CheckCircle size={18} className="text-emerald-400" />
                                        <span>Personalized Career Advice</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <CheckCircle size={18} className="text-emerald-400" />
                                        <span>Resume Review Support</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <CheckCircle size={18} className="text-emerald-400" />
                                        <span>Interview Preparation</span>
                                    </div>
                                    <div className="flex gap-3 items-center">
                                        <CheckCircle size={18} className="text-emerald-400" />
                                        <span>Direct Recruitment Access</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Form Panel */}
                        <div className="bg-white p-12 relative">

                            {/* Success Toast banner using AnimatePresence */}
                            <AnimatePresence>
                                {status.success && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-medium flex items-center gap-2"
                                    >
                                        <CheckCircle size={18} className="text-emerald-600 shrink-0" />
                                        <span>Thank you! Your message has been sent successfully. Our team will contact you within 24 hours.</span>
                                    </motion.div>
                                )}
                                {status.error && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="mb-6 p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-sm font-medium flex items-center gap-2"
                                    >
                                        <AlertCircle size={18} className="text-rose-600 shrink-0" />
                                        <span>{status.error}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <form onSubmit={handleFormSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        required
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500 transition-colors w-full"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email Address"
                                        required
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500 transition-colors w-full"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-5">
                                    <input
                                        type="text"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Phone Number"
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500 transition-colors w-full"
                                    />
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleInputChange}
                                        placeholder="Location (e.g. Toronto, NY)"
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500 transition-colors w-full"
                                    />
                                </div>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows="6"
                                    placeholder="Tell us about your goals..."
                                    required
                                    className="w-full border rounded-xl px-4 py-4 outline-none focus:border-emerald-500 transition-colors"
                                />

                                <Button
                                    type="submit"
                                    className="w-full inline-flex items-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
                                    disabled={status.loading}
                                >
                                    {status.loading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </Button>
                            </form>

                        </div>

                    </div>
                </div>
            </section>

            {/* =======================================================
                  NORTH AMERICA NETWORK
            ======================================================= */}
            <section className="py-24 bg-slate-50">
                <div className="w-full max-w-345 mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="uppercase tracking-[3px] text-emerald-600 text-sm font-semibold">
                            Our Network
                        </span>
                        <h2 className="mt-4 text-4xl font-bold text-slate-900">
                            Connecting Talent Across North America
                        </h2>
                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            Our strongest recruitment network spans the United States and Canada,
                            helping professionals connect with opportunities across both countries.
                        </p>
                    </div>

                    <div className="mt-16 bg-white rounded-3xl shadow-lg p-12">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            {/* LEFT */}
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900">
                                    United States & Canada
                                </h3>
                                <p className="mt-6 text-slate-600 leading-8">
                                    Our recruiters actively work with hiring partners throughout North
                                    America, creating career opportunities in technology, healthcare,
                                    finance, engineering and professional services.
                                </p>
                                <div className="mt-10 grid grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">250+</h4>
                                        <p className="text-slate-500 mt-2">Hiring Partners</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">500+</h4>
                                        <p className="text-slate-500 mt-2">Candidates Connected</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">98%</h4>
                                        <p className="text-slate-500 mt-2">Placement Success</p>
                                    </div>
                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">24/7</h4>
                                        <p className="text-slate-500 mt-2">Initial Response</p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT - Custom interactive SVG map replaces placeholder */}
                            <div className="w-full">
                                <WorldMap />
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* =======================================================
                  WHY REACH OUT SECTION
            ======================================================= */}
            <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
                {/* Subtle tech background details */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 pointer-events-none"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

                <div className="w-full max-w-345 mx-auto px-6 relative z-10">
                    <div className="text-center max-w-2xl mx-auto">
                        <span className="text-sm uppercase tracking-[3px] text-emerald-400 font-semibold">
                            PARTNERSHIP VALUE
                        </span>
                        <h2 className="text-4xl font-bold mt-5 mb-6">
                            The NexMove Support Ecosystem
                        </h2>
                        <p className="text-slate-300 leading-8 text-sm">
                            We go beyond typical recruitment agencies. We provide specialized, end-to-end career consulting and corporate networking built for sustainable professional growth.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mt-20">
                        {/* Card 1: Strategic Career Mapping */}
                        <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-lg pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-500 text-emerald-400 group-hover:text-white">
                                <Compass size={24} className="transition-transform duration-500 group-hover:rotate-45" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                Strategic Career Mapping
                            </h3>
                            <p className="text-slate-300 leading-7 text-sm">
                                Work directly with executive recruiters to analyze your skills, define your market trajectory, and select high-yield sectors in the US & Canada.
                            </p>
                        </div>

                        {/* Card 2: ATS Profile Optimization */}
                        <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-lg pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-500 text-emerald-400 group-hover:text-white">
                                <FileText size={24} className="transition-transform duration-500 group-hover:scale-105" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                ATS Profile Optimization
                            </h3>
                            <p className="text-slate-300 leading-7 text-sm">
                                Restructure your resume, portfolio layout, and LinkedIn positioning using optimized indices designed to bypass automated screening filters.
                            </p>
                        </div>

                        {/* Card 3: High-Tier Network Access */}
                        <div className="bg-[#0f172a]/60 border border-slate-800/80 rounded-3xl p-8 hover:border-emerald-500/30 hover:shadow-xl transition-all duration-500 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 rounded-full blur-lg pointer-events-none group-hover:bg-emerald-500/10 transition-colors duration-500"></div>

                            <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-8 border border-emerald-500/20 group-hover:bg-emerald-600 group-hover:border-emerald-500 transition-all duration-500 text-emerald-400 group-hover:text-white">
                                <Handshake size={24} className="transition-transform duration-500 group-hover:translate-x-0.5" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4">
                                High-Tier Network Access
                            </h3>
                            <p className="text-slate-300 leading-7 text-sm">
                                Secure direct channels to active decision-makers and hiring stakeholders across North America's tech, healthcare, and engineering sectors.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* =======================================================
                  BOTTOM CTA SECTION
            ======================================================= */}
            <section className="py-24 bg-white">
                <div className="w-full max-w-345 mx-auto px-6">
                    <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 text-center px-12 py-20 relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-10 pointer-events-none"></div>
                        <div className="relative z-10">
                            <h2 className="text-5xl font-bold text-white">
                                Your Next Opportunity Starts Here.
                            </h2>
                            <p className="text-slate-300 mt-6 max-w-2xl mx-auto">
                                Join thousands of professionals who trusted NexMoveTalent to help them build rewarding careers.
                            </p>
                            <div className="mt-10 flex justify-center gap-6">
                                <Button onClick={scrollToForm}>
                                    Apply Now
                                </Button>
                                <Button variant="secondary" onClick={scrollToForm}>
                                    Speak With Our Team
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
