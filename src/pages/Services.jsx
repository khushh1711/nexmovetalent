import { motion } from "framer-motion";
import {
    Briefcase,
    Users,
    Code2,
    ArrowRight,
    CheckCircle,
} from "lucide-react";

import Button from "../components/common/Button";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import FadeInImage from "../components/common/FadeInImage";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Images
import heroImg from "../assets/images/hero/discuss.jpg";
import service1 from "../assets/images/hero/hero.jpg";
import service2 from "../assets/images/hero/IT-staffing.jpg";
import service3 from "../assets/images/hero/about.jpg";



const services = [
    {
        icon: Briefcase,
        title: "Core Recruitment",
        description:
            "Helping students, graduates and experienced professionals discover career opportunities that match their skills and ambitions.",
        image: service1,
    },
    {
        icon: Users,
        title: "IT & Non-IT Staffing",
        description:
            "Connecting talented candidates with organizations across technology, healthcare, finance, administration and many other industries.",
        image: service2,
    },
    {
        icon: Code2,
        title: "Software Development",
        description:
            "Delivering modern software development solutions while creating exciting career opportunities for technical professionals.",
        image: service3,
    },
];

const features = [
    "Career guidance from experienced recruiters",
    "Access to exclusive job opportunities",
    "Resume and interview preparation",
    "Transparent recruitment process",
    "Long-term career support",
    "Trusted opportunities across USA & Canada",
];

const processSteps = [
    {
        number: "01",
        title: "Application",
        description:
            "Submit your resume or share your profile with our recruitment specialists.",
    },
    {
        number: "02",
        title: "Profile Evaluation",
        description:
            "We carefully assess your skills, experience and career aspirations.",
    },
    {
        number: "03",
        title: "Interview Preparation",
        description:
            "Receive resume improvement, interview tips and career guidance before employer interviews.",
    },
    {
        number: "04",
        title: "Placement",
        description:
            "Begin your new career with confidence while our team continues supporting your growth.",
    },
];

const faqs = [
    {
        question: "Who can apply through NexMoveTalent?",
        answer:
            "Students, fresh graduates and experienced professionals looking for new career opportunities can apply through NexMoveTalent.",
    },
    {
        question: "Do you only recruit for IT roles?",
        answer:
            "No. We recruit for IT, Non-IT, Healthcare, Engineering, Finance and many other industries.",
    },
    {
        question: "Do candidates pay recruitment fees?",
        answer:
            "No. Our recruitment services are completely free for job seekers.",
    },
    {
        question: "Can freshers apply?",
        answer:
            "Absolutely. We regularly help fresh graduates begin their professional careers.",
    },
    {
        question: "Do you provide interview preparation?",
        answer:
            "Yes. We help candidates with resume improvement, interview preparation and career guidance.",
    },
];

const plans = [
    {
        name: "Career Kickstart",
        price: "$5,000",
        period: "one-time",
        tagline: "Ideal for fresh graduates seeking entry-level positions.",
        features: [
            "Resume & LinkedIn Optimization",
            "3 Private Interview Coaching Sessions",
            "Direct Partner Network Submission",
            "Standard Placement Support (Email)",
            "Career Path Consultation",
        ],
        buttonText: "Enroll Now",
        popular: false,
    },
    {
        name: "Professional Accelerator",
        price: "$7,000",
        period: "one-time",
        tagline: "Our most popular track for specialized IT & healthcare roles.",
        features: [
            "Premium Refined Resume & Portfolio",
            "Unlimited Technical Mock Interviews",
            "Priority Hiring Manager Matching",
            "IT Project Direct Placement Track",
            "Dedicated Personal Career Manager",
            "1-on-1 Career Mentorship",
        ],
        buttonText: "Join Program",
        popular: true,
    },
    {
        name: "Elite VIP Placement",
        price: "$12,000",
        period: "one-time",
        tagline: "Exclusive fast-track track for top-tier multinationals.",
        features: [
            "Guaranteed Corporate Bootcamp Access",
            "Executive Fast-Track Placement",
            "1-on-1 Senior Industry Director Mentoring",
            "Guaranteed Placement Support Window",
            "Lifetime Alumni Network Access",
            "24/7 Priority VIP Support Line",
        ],
        buttonText: "Get VIP Access",
        popular: false,
    },
];


const Services = () => {
    const navigate = useNavigate();
    const [activeFAQ, setActiveFAQ] = useState(0);

    return (
        <>

            <Helmet>
                <title>Services | NexMoveTalent</title>

                <meta
                    name="description"
                    content="Explore our recruitment, staffing and software development services designed to connect talent with opportunity."
                />
            </Helmet>

            {/* =======================================================
                    HERO SECTION
======================================================= */}

            <section className="bg-white pt-24 pb-24 overflow-hidden">

                <div className="w-full max-w-[1380px] mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium">

                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>

                                What We Offer

                            </span>

                            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mt-8 leading-tight">

                                Services That
                                <br />

                                Move Careers
                                <span className="text-emerald-500">

                                    Forward

                                </span>

                            </h1>

                            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

                                At NexMoveTalent, we provide recruitment and staffing
                                solutions designed to connect talented professionals
                                with meaningful career opportunities across North America.

                            </p>

                             <div className="mt-10 flex flex-wrap gap-4">

                                 <Button onClick={() => {
                                     const el = document.getElementById("services-grid");
                                     if (el) el.scrollIntoView({ behavior: "smooth" });
                                 }}>

                                     Explore Services

                                 </Button>

                                 <Button variant="secondary" onClick={() => navigate('/contact')}>

                                     Contact Us

                                 </Button>

                             </div>

                        </motion.div>

                        {/* Right */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="relative"
                        >

                             <FadeInImage
                                 src={heroImg}
                                 alt=""
                                 className="rounded-3xl shadow-2xl h-130 object-cover w-full"
                             />

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =======================================================
                    SERVICES
======================================================= */}

            <section id="services-grid" className="py-24 bg-slate-50">

                <div className="w-full max-w-[1380px] mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >

                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">

                            OUR SERVICES

                        </span>

                        <h2 className="text-4xl font-bold mt-5">

                            Helping Every Candidate
                            <br />

                            Reach Their Potential

                        </h2>

                        <p className="text-slate-500 mt-6 max-w-3xl mx-auto leading-8">

                            Our services are designed to guide candidates through every
                            stage of their professional journey while supporting
                            organizations with high-quality talent.

                        </p>

                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {services.map((service, index) => {

                            const Icon = service.icon;

                            return (

                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.8,
                                        delay: index * 0.1,
                                        ease: [0.16, 1, 0.3, 1]
                                    }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    whileHover={{
                                        y: -8,
                                    }}
                                    className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition"
                                >

                                     <FadeInImage
                                         src={service.image}
                                         alt={service.title}
                                         className="h-60 w-full object-cover"
                                     />

                                    <div className="p-8">

                                        <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">

                                            <Icon
                                                size={28}
                                                className="text-emerald-600"
                                            />

                                        </div>

                                        <h3 className="text-2xl font-semibold">

                                            {service.title}

                                        </h3>

                                        <p className="mt-5 text-slate-600 leading-8">

                                            {service.description}

                                        </p>

                                         <button 
                                             onClick={() => {
                                                 const slug = index === 0 ? "core-recruitment" : index === 1 ? "staffing" : "software-development";
                                                 navigate(`/services/${slug}`);
                                             }}
                                             className="mt-8 flex items-center gap-2 font-semibold text-emerald-600 hover:gap-4 transition-all cursor-pointer"
                                         >

                                             Learn More

                                             <ArrowRight size={18} />

                                         </button>

                                    </div>

                                </motion.div>

                            );

                        })}

                    </div>

                </div>

            </section>

            {/* =======================================================
                WHY CHOOSE OUR SERVICES
======================================================= */}

            <section className="py-24 bg-white">

                <div className="w-full max-w-[1380px] mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <h2 className="text-4xl font-bold leading-tight">

                                Why Candidates
                                <br />
                                Choose NexMoveTalent

                            </h2>

                            <p className="mt-8 text-slate-600 leading-8">

                                We believe every professional deserves more than a job.
                                Our recruitment process is designed to build meaningful,
                                long-term careers through personalized guidance and trusted
                                industry connections.

                            </p>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >

                            {features.map((item, index) => (

                                <div
                                    key={index}
                                    className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition"
                                >

                                    <CheckCircle
                                        className="text-emerald-600 mt-1"
                                        size={22}
                                    />

                                    <p className="text-slate-700">

                                        {item}

                                    </p>

                                </div>

                            ))}

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =======================================================
                RECRUITMENT PROCESS
======================================================= */}

            <section className="py-24 bg-slate-50">

                <div className="w-full max-w-[1380px] mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >

                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">

                            HOW IT WORKS

                        </span>

                        <h2 className="text-4xl font-bold mt-5">

                            Our Recruitment Process

                        </h2>

                        <p className="text-slate-500 mt-6 max-w-3xl mx-auto">

                            A transparent process focused on helping every candidate
                            move confidently toward their next opportunity.

                        </p>

                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                        {processSteps.map((step) => (

                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition"
                            >

                                <span className="text-emerald-600 text-5xl font-bold">

                                    {step.number}

                                </span>

                                <h3 className="mt-6 text-2xl font-semibold">

                                    {step.title}

                                </h3>

                                <p className="mt-4 text-slate-600 leading-8">

                                    {step.description}

                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =======================================================
                    PLACEMENT PLANS
      ======================================================= */}
            <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
                <div className="w-full max-w-[1380px] mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">
                            PLACEMENT PLANS
                        </span>
                        <h2 className="text-4xl font-bold mt-4">
                            Structured Programs for Student Placement
                        </h2>
                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                            Invest in your professional future. Our curated plans are designed to equip you with credentials, coaching, and direct placements in your target fields.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className={`relative bg-white rounded-3xl p-8 border ${
                                    plan.popular
                                        ? "border-emerald-500 shadow-xl lg:scale-105 z-10"
                                        : "border-slate-200 shadow-sm"
                                } flex flex-col justify-between`}
                            >
                                {plan.popular && (
                                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                                        Most Popular
                                    </span>
                                )}

                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900">{plan.name}</h3>
                                    <p className="text-slate-500 text-sm mt-3 leading-relaxed">{plan.tagline}</p>
                                    
                                    <div className="mt-6 flex items-baseline gap-1.5">
                                        <span className="text-5xl font-extrabold text-slate-900">{plan.price}</span>
                                        <span className="text-slate-500 text-sm font-medium">/ {plan.period}</span>
                                    </div>

                                    <ul className="space-y-4 mt-8">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start gap-3 text-slate-600 text-sm">
                                                <CheckCircle size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Link to={plan.name === "Career Kickstart" ? "/contact?role=candidate&plan=career-kickstart" : plan.name === "Professional Accelerator" ? "/contact?role=candidate&plan=professional-accelerator" : "/contact?role=candidate&plan=elite-vip"}>
                                        <Button
                                            variant={plan.popular ? "primary" : "secondary"}
                                            className="w-full py-3"
                                        >
                                            {plan.buttonText}
                                        </Button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* =======================================================
                        FAQ
======================================================= */}

            <section className="py-24 bg-white">

                <div className="w-full max-w-[1380px] mx-auto px-6">

                    <div className="text-center mb-16">

                        <h2 className="text-4xl font-bold text-slate-900">

                            Frequently Asked Questions

                        </h2>

                        <p className="text-slate-500 mt-4">

                            Everything candidates usually ask before getting started.

                        </p>

                    </div>

                    <div className="max-w-5xl mx-auto space-y-5">

                        {faqs.map((faq, index) => (

                            <div
                                key={index}
                                className="border border-slate-200 rounded-2xl overflow-hidden bg-white transition-all duration-300"
                            >

                                <button
                                    onClick={() =>
                                        setActiveFAQ(activeFAQ === index ? -1 : index)
                                    }
                                    className="w-full flex justify-between items-center px-8 py-7 text-left"
                                >

                                    <h3 className="text-xl font-semibold text-slate-900">

                                        {faq.question}

                                    </h3>

                                    <ChevronDown
                                        size={24}
                                        className={`transition-transform duration-300 ${activeFAQ === index
                                            ? "rotate-180 text-emerald-500"
                                            : "text-slate-500"
                                            }`}
                                    />

                                </button>

                                <div
                                    className={`grid transition-all duration-500 ease-in-out ${activeFAQ === index
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                        }`}
                                >

                                    <div className="overflow-hidden">

                                        <p className="px-8 pb-8 text-slate-600 leading-8">

                                            {faq.answer}

                                        </p>

                                    </div>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =======================================================
                    FINAL CTA
======================================================= */}

            <section className="py-28 bg-slate-900">

                <div className="w-full max-w-[1380px] mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >

                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-400">

                            START YOUR JOURNEY

                        </span>

                        <h2 className="text-5xl font-bold text-white mt-6 leading-tight">

                            Let's Find Your
                            <br />

                            Next Opportunity

                        </h2>

                        <p className="mt-8 text-slate-300 text-lg leading-8">

                            Whether you're searching for your first role or planning
                            your next career move, NexMoveTalent is here to help you
                            discover meaningful opportunities across the USA and Canada.

                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <Button>

                                Apply Now

                            </Button>

                            <Button variant="secondary">

                                Contact Us

                            </Button>

                        </div>

                    </motion.div>

                </div>

            </section>
        </>
    );

};
export default Services;

