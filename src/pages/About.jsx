import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import Button from "../components/common/Button";
import { Helmet } from "react-helmet-async";

// Images
import heroImg from "../assets/images/hero/about.jpg";
import journeyImg from "../assets/images/hero/about-1.jpg";

import graduatesImg from "../assets/images/hero/hero.jpg";
import professionalsImg from "../assets/images/hero/IT-staffing.jpg";
import employersImg from "../assets/images/hero/discuss.jpg";

const values = [
    {
        title: "Integrity",
        text: "We believe honesty and ethical recruitment create long-term success for both professionals and organizations.",
        icon: "🛡️",
    },
    {
        title: "People First",
        text: "Every decision begins with understanding the aspirations of individuals and the needs of businesses.",
        icon: "💚",
    },
    {
        title: "Excellence",
        text: "We continuously improve our recruitment process to deliver exceptional results.",
        icon: "⭐",
    },
    {
        title: "Transparency",
        text: "Open communication and clear expectations throughout every recruitment journey.",
        icon: "👁️",
    },
    {
        title: "Learning",
        text: "Keeping up with evolving industries and technologies to better serve candidates.",
        icon: "📚",
    },
    {
        title: "Relationships",
        text: "Creating partnerships that continue long after the hiring process is complete.",
        icon: "🤝",
    },
];

const supportCards = [
    {
        image: graduatesImg,
        title: "Fresh Graduates",
        text: "Launch your career with internship opportunities, resume guidance and interview preparation.",
    },
    {
        image: professionalsImg,
        title: "Experienced Professionals",
        text: "Advance your career through executive opportunities and personalized career planning.",
    },
    {
        image: employersImg,
        title: "Hiring Organizations",
        text: "Access a curated talent network backed by an experienced recruitment team.",
    },
];

const approachSteps = [
    {
        title: "Understand",
        description:
            "We begin by understanding career goals, skills, and aspirations before recommending opportunities.",
    },
    {
        title: "Connect",
        description:
            "Our team carefully matches candidates with organizations where they can grow and succeed.",
    },
    {
        title: "Prepare",
        description:
            "Interview guidance, resume feedback, and career coaching ensure candidates are fully prepared.",
    },
    {
        title: "Support",
        description:
            "Even after placement, we continue supporting career growth through long-term relationships.",
    },
];

const trustReasons = [
    "Personalized career guidance",
    "Transparent recruitment process",
    "Access to premium opportunities",
    "Experienced recruitment specialists",
    "Long-term career partnerships",
    "Trusted across USA & Canada",
];

const About = () => {
    return (
        <>

            <Helmet>
                <title>About Us | NexMoveTalent</title>

                <meta
                    name="description"
                    content="Learn about NexMoveTalent, our mission, vision and commitment to helping professionals build successful careers."
                />
            </Helmet>
            {/* =======================================================
                          HERO SECTION
      ======================================================= */}

            <section className="bg-white pt-24 pb-24 overflow-hidden">
                <div className="container mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Content */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                        >

                            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-100 rounded-full px-4 py-2 mb-8">

                                <div className="w-2 h-2 rounded-full bg-emerald-500"></div>

                                <span className="text-sm font-medium text-emerald-700">
                                    Elite Recruitment Partner
                                </span>

                            </div>

                            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

                                Connecting Ambition
                                <br />

                                With{" "}

                                <span className="text-emerald-500">
                                    Opportunity
                                </span>

                            </h1>

                            <p className="mt-8 text-lg leading-8 text-slate-600 max-w-xl">

                                NexMoveTalent exists to bridge the gap between
                                world-class professionals and visionary organizations.
                                We go beyond placement, fostering career paths and
                                organizational growth.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <Button>

                                    Explore Services

                                </Button>

                                <Button variant="secondary">

                                    Contact Us

                                </Button>

                            </div>

                            <div className="mt-10 flex flex-wrap gap-8">

                                <div className="flex items-center gap-2 text-slate-600">

                                    <CheckCircle
                                        className="text-emerald-500"
                                        size={18}
                                    />

                                    <span>98% Success Rate</span>

                                </div>

                                <div className="flex items-center gap-2 text-slate-600">

                                    <CheckCircle
                                        className="text-emerald-500"
                                        size={18}
                                    />

                                    <span>Global Network</span>

                                </div>

                            </div>

                        </motion.div>

                        {/* Right Image */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="relative"
                        >

                            <img
                                src={heroImg}
                                alt="About NexMoveTalent"
                                className="w-full h-[520px] object-cover rounded-3xl shadow-2xl"
                            />

                            {/* Floating Card */}

                            <div className="absolute -bottom-8 left-8 bg-white rounded-2xl shadow-xl px-6 py-5">

                                <div className="flex items-center gap-4">

                                    <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center">

                                        <div className="w-5 h-5 rounded-full bg-emerald-500"></div>

                                    </div>

                                    <div>

                                        <h3 className="text-xl font-bold text-slate-900">

                                            5000+

                                        </h3>

                                        <p className="text-sm text-slate-500">

                                            Professionals Connected

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* =======================================================
                    OUR JOURNEY
======================================================= */}

            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        {/* Left Image */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >

                            <img
                                src={journeyImg}
                                alt="Our Journey"
                                className="w-full rounded-3xl shadow-xl object-cover h-[520px]"
                            />

                        </motion.div>

                        {/* Right Content */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >

                            <div className="w-16 h-1 bg-emerald-500 rounded-full mb-6"></div>

                            <h2 className="text-4xl font-bold text-slate-900 mb-8">

                                Our Journey

                            </h2>

                            <p className="text-slate-600 leading-8 mb-6">

                                NexMoveTalent was founded with one simple yet powerful belief:
                                recruitment is not just about filling vacancies—it's about
                                creating meaningful careers and helping organizations build
                                stronger futures.

                            </p>

                            <p className="text-slate-600 leading-8 mb-6">

                                From our beginnings, we've focused on connecting ambitious
                                students, graduates, and professionals with organizations
                                where they can truly grow. Every recommendation is guided
                                by quality, integrity, and long-term relationships.

                            </p>

                            <p className="text-slate-600 leading-8">

                                Today, we continue to expand across North America, helping
                                thousands of candidates discover opportunities while
                                supporting businesses with exceptional talent solutions.

                            </p>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* =======================================================
                    MISSION & VISION
======================================================= */}

            <section className="py-10 bg-white">
                <div className="container mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-8">

                        {/* Mission */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="bg-[#0F172A] rounded-3xl p-10 text-white relative overflow-hidden"
                        >

                            <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-6">

                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6 text-emerald-400"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 2l3 7h7l-5.5 4.2L18.5 22 12 17.8 5.5 22l2-8.8L2 9h7z"
                                    />
                                </svg>

                            </div>

                            <h2 className="text-3xl font-bold mb-6">

                                Our Mission

                            </h2>

                            <p className="text-slate-300 leading-8">

                                To empower professionals and graduates by connecting them
                                with meaningful career opportunities while enabling
                                organizations to discover exceptional talent through
                                ethical, transparent, and human-centered recruitment.

                            </p>

                        </motion.div>

                        {/* Vision */}

                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="relative bg-white border border-slate-200 rounded-3xl p-10 overflow-hidden"
                        >

                            {/* Decorative Circle */}

                            <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-emerald-50"></div>

                            <div className="relative z-10">

                                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-6">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6 text-emerald-500"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 10l4.5-4.5M19.5 5.5H15m4.5 0V10"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M10 14L4.5 19.5M4.5 19.5V15m0 4.5H9"
                                        />
                                    </svg>

                                </div>

                                <h2 className="text-3xl font-bold text-slate-900 mb-6">

                                    Our Vision

                                </h2>

                                <p className="text-slate-600 leading-8">

                                    To become the most trusted career partner for aspiring
                                    professionals and the preferred recruitment partner for
                                    organizations seeking long-term growth, innovation,
                                    and sustainable success.

                                </p>

                            </div>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* =======================================================
                    CORE VALUES
======================================================= */}

            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >

                        <h2 className="text-4xl font-bold text-slate-900">

                            The Core Values We Live By

                        </h2>

                        <p className="text-slate-500 mt-4 max-w-2xl mx-auto">

                            These principles shape every partnership,
                            every placement and every career journey.

                        </p>

                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                        {values.map((item, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, delay: index * .08 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-3xl p-8 border border-slate-100 hover:shadow-xl transition"
                            >

                                <div className="text-3xl mb-6">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-semibold text-slate-900 mb-3">

                                    {item.title}

                                </h3>

                                <p className="text-slate-600 leading-7">

                                    {item.text}

                                </p>

                            </motion.div>

                        ))}

                    </div>

                </div>
            </section>

            {/* =======================================================
              DEDICATED SUPPORT
======================================================= */}

            <section className="py-24 bg-white">

                <div className="container mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >

                        <h2 className="text-4xl font-bold text-slate-900">

                            Dedicated Support For Every Path

                        </h2>

                        <p className="text-slate-500 mt-4">

                            Wherever you are in your career,
                            NexMoveTalent is ready to guide you.

                        </p>

                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8">

                        {supportCards.map((card, index) => (

                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .5, delay: index * .08 }}
                                viewport={{ once: true }}
                                className="rounded-3xl overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition"
                            >

                                <img
                                    src={card.image}
                                    alt={card.title}
                                    className="w-full h-60 object-cover"
                                />

                                <div className="p-8">

                                    <h3 className="text-2xl font-semibold mb-4">

                                        {card.title}

                                    </h3>

                                    <p className="text-slate-600 leading-7 mb-6">

                                        {card.text}

                                    </p>

                                    <button className="text-emerald-600 font-semibold hover:gap-3 flex items-center gap-2 transition">

                                        Learn More →

                                    </button>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* =======================================================
                    OUR APPROACH
======================================================= */}

            <section className="py-24 bg-slate-50">

                <div className="container mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16">

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <span className="text-sm uppercase tracking-[3px] text-emerald-600 font-semibold">
                                OUR APPROACH
                            </span>

                            <h2 className="text-4xl font-bold mt-5 mb-6">
                                Our Recruitment Process
                            </h2>

                            <p className="text-slate-600 leading-8 mb-10">
                                Every successful placement begins with understanding people.
                                Our approach focuses on relationships instead of transactions.
                            </p>

                            <div className="space-y-8">

                                {approachSteps.map((step, index) => (

                                    <div
                                        key={index}
                                        className="flex gap-5"
                                    >

                                        <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold shrink-0">

                                            {index + 1}

                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-xl">

                                                {step.title}

                                            </h4>

                                            <p className="mt-2 text-slate-600 leading-7">

                                                {step.description}

                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .6 }}
                            viewport={{ once: true }}
                        >

                            <div className="bg-white rounded-3xl p-10 shadow-lg h-full">

                                <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">

                                    WHY CHOOSE US

                                </span>

                                <h2 className="text-4xl font-bold mt-5 mb-8">

                                    Why People Trust NexMoveTalent

                                </h2>

                                <div className="space-y-6">

                                    {trustReasons.map((reason) => (

                                        <div
                                            key={reason}
                                            className="flex items-center gap-4"
                                        >

                                            <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">

                                                <CheckCircle
                                                    size={18}
                                                    className="text-emerald-600"
                                                />

                                            </div>

                                            <p className="text-slate-700 font-medium">

                                                {reason}

                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =======================================================
                  COMPANY STATS
======================================================= */}

            <section className="py-24 bg-white">

                <div className="container mx-auto px-6">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">

                        <div>

                            <h2 className="text-5xl font-bold text-emerald-600">

                                5000+

                            </h2>

                            <p className="mt-4 text-slate-600">

                                Candidates Connected

                            </p>

                        </div>

                        <div>

                            <h2 className="text-5xl font-bold text-emerald-600">

                                300+

                            </h2>

                            <p className="mt-4 text-slate-600">

                                Hiring Partners

                            </p>

                        </div>

                        <div>

                            <h2 className="text-5xl font-bold text-emerald-600">

                                98%

                            </h2>

                            <p className="mt-4 text-slate-600">

                                Success Rate

                            </p>

                        </div>

                        <div>

                            <h2 className="text-5xl font-bold text-emerald-600">

                                24/7

                            </h2>

                            <p className="mt-4 text-slate-600">

                                Dedicated Support

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* =======================================================
                    FINAL CTA
======================================================= */}

            <section className="py-28 bg-slate-900">

                <div className="container mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >

                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-400">

                            LET'S BUILD YOUR FUTURE

                        </span>

                        <h2 className="text-5xl font-bold text-white mt-6 leading-tight">

                            Your Career Journey
                            <br />
                            Starts Here

                        </h2>

                        <p className="text-slate-300 mt-8 text-lg leading-8">

                            Whether you're starting your first job or looking for your next big opportunity,
                            NexMoveTalent is here to guide you every step of the way.

                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <Button>

                                Explore Opportunities

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

export default About;
