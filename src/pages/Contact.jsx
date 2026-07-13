import { motion } from "framer-motion";
import {
    Mail,
    Phone,
    Clock3,
    Globe,
    CheckCircle,
} from "lucide-react";

import Button from "../components/common/Button";
import { Helmet } from "react-helmet-async";

// Images
import heroImg from "../assets/images/hero/contact-1.jpg";
import worldMap from "../assets/images/hero/World-map.jpg";

const contactCards = [
    {
        icon: Mail,
        title: "Email",
        value: "careers@nexmovetalent.com",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+1 (800) 555-0199",
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
        answer: "No. Our recruitment services are completely free for candidates."
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

const locations = [
    {
        id: 1,
        name: "USA",
        top: "43%",
        left: "28%",
    },
    {
        id: 2,
        name: "Canada",
        top: "26%",
        left: "31%",
    },
];


const Contact = () => {
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
                <div className="container mx-auto px-6">

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

                                <Button>
                                    Apply Now
                                </Button>

                                <Button variant="secondary">
                                    Contact Team
                                </Button>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-8">

                                <div className="flex items-center gap-2">

                                    <CheckCircle
                                        size={18}
                                        className="text-emerald-500"
                                    />

                                    <span className="text-slate-600">
                                        24-Hour Response
                                    </span>

                                </div>

                                <div className="flex items-center gap-2">

                                    <CheckCircle
                                        size={18}
                                        className="text-emerald-500"
                                    />

                                    <span className="text-slate-600">
                                        Career Guidance
                                    </span>

                                </div>

                                <div className="flex items-center gap-2">

                                    <CheckCircle
                                        size={18}
                                        className="text-emerald-500"
                                    />

                                    <span className="text-slate-600">
                                        Trusted Partner
                                    </span>

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

                            <img
                                src={heroImg}
                                alt="Contact NexMoveTalent"
                                className="w-full h-130 object-cover rounded-3xl shadow-2xl"
                            />

                            <div className="absolute bottom-6 left-6 bg-white rounded-2xl shadow-xl px-6 py-5">

                                <h3 className="text-3xl font-bold text-slate-900">

                                    98%

                                </h3>

                                <p className="text-slate-500">

                                    Candidate Satisfaction

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* ==========================================
            CONTACT CARDS
========================================== */}

            <section className="pb-20 bg-white">

                <div className="container mx-auto px-6">

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {contactCards.map((card, index) => {

                            const Icon = card.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: .5 }}
                                    viewport={{ once: true }}
                                    className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-xl transition"
                                >

                                    <Icon
                                        className="text-emerald-500 mb-4"
                                        size={26}
                                    />

                                    <h3 className="font-semibold text-slate-900">

                                        {card.title}

                                    </h3>

                                    <p className="text-slate-600 mt-2">

                                        {card.value}

                                    </p>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* ==========================================
            CONTACT FORM
========================================== */}

            <section className="pb-24 bg-white">

                <div className="container mx-auto px-6">

                    <div className="grid lg:grid-cols-2 overflow-hidden rounded-3xl shadow-xl">

                        {/* Left */}

                        <div className="bg-slate-900 text-white p-12">

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

                        {/* Right */}

                        <div className="bg-white p-12">

                            <form className="space-y-5">

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                                    />

                                </div>

                                <div className="grid md:grid-cols-2 gap-5">

                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="border rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                                    />

                                </div>

                                <textarea
                                    rows="6"
                                    placeholder="Tell us about your goals..."
                                    className="w-full border rounded-xl px-4 py-4 outline-none focus:border-emerald-500"
                                />

                                <Button className="w-full">

                                    Send Message

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

                <div className="container mx-auto px-6">

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
                                        <h4 className="text-4xl font-bold text-emerald-500">50+</h4>
                                        <p className="text-slate-500 mt-2">Hiring Partners</p>
                                    </div>

                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">5,000+</h4>
                                        <p className="text-slate-500 mt-2">Candidates Connected</p>
                                    </div>

                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">98%</h4>
                                        <p className="text-slate-500 mt-2">Placement Success</p>
                                    </div>

                                    <div>
                                        <h4 className="text-4xl font-bold text-emerald-500">48h</h4>
                                        <p className="text-slate-500 mt-2">Average Response</p>
                                    </div>

                                </div>

                            </div>

                            {/* RIGHT */}

                            <div className="relative w-full">
                                <img
                                    src={worldMap}
                                    alt="World Map"
                                    className="w-full rounded-2xl shadow-lg"
                                />

                                {locations.map((location) => (
                                    <div
                                        key={location.id}
                                        className="absolute -translate-x-1/2 -translate-y-1/2"
                                        style={{
                                            top: location.top,
                                            left: location.left,
                                        }}
                                    >
                                        {/* Pulse */}
                                        <span className="absolute inset-0 w-5 h-5 rounded-full bg-emerald-500 opacity-40 animate-ping"></span>

                                        {/* Dot */}
                                        <span className="relative block w-5 h-5 rounded-full bg-emerald-500 border-2 border-white shadow-lg"></span>
                                    </div>
                                ))}
                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <section className="py-24 bg-slate-900">

                <div className="container mx-auto px-6">

                    <div className="text-center text-white">

                        <h2 className="text-4xl font-bold">

                            Why Reach Out To Us?

                        </h2>

                        <p className="mt-5 text-slate-300">

                            We're more than recruiters. We're career partners.

                        </p>

                    </div>

                    <div className="grid lg:grid-cols-3 gap-8 mt-16">

                        <div className="bg-slate-800 rounded-2xl p-8">

                            <div className="text-emerald-500 text-5xl mb-6">

                                💼

                            </div>

                            <h3 className="text-2xl font-semibold text-white">

                                Career Guidance

                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">

                                Receive expert advice for your next career move with dedicated consultants.

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8">

                            <div className="text-emerald-500 text-5xl mb-6">

                                📄

                            </div>

                            <h3 className="text-2xl font-semibold text-white">

                                Resume Support

                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">

                                Improve your resume and LinkedIn profile before applying.

                            </p>

                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8">

                            <div className="text-emerald-500 text-5xl mb-6">

                                🤝

                            </div>

                            <h3 className="text-2xl font-semibold text-white">

                                Dedicated Recruiters

                            </h3>

                            <p className="mt-5 text-slate-300 leading-8">

                                Stay connected with experienced recruiters throughout your hiring journey.

                            </p>

                        </div>

                    </div>

                </div>

            </section>


            <section className="py-24 bg-white">

                <div className="container mx-auto px-6">

                    <div className="rounded-3xl bg-linear-to-r from-slate-900 to-slate-800 text-center px-12 py-20">

                        <h2 className="text-5xl font-bold text-white">

                            Your Next Opportunity Starts Here.

                        </h2>

                        <p className="text-slate-300 mt-6 max-w-2xl mx-auto">

                            Join thousands of professionals who trusted NexMoveTalent to help them build rewarding careers.

                        </p>

                        <div className="mt-10 flex justify-center gap-6">

                            <Button>

                                Apply Now

                            </Button>

                            <Button variant="secondary">

                                Speak With Our Team

                            </Button>

                        </div>

                    </div>

                </div>

            </section>

        </>
    );
};

export default Contact;
