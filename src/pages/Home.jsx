import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Users,
    Briefcase,
    Code2,
    Monitor,
    HeartPulse,
    Landmark,
    Cog,
    Factory,
    Building2,
    ShoppingBag,
    BriefcaseBusiness,
} from "lucide-react";

import Button from "../components/common/Button";
import { Helmet } from "react-helmet-async";

import heroImg from "../assets/images/hero/hero.jpg";
import trustImg from "../assets/images/hero/discuss.jpg";
import ctaImg from "../assets/images/hero/IT-staffing.jpg";

const trustPoints = [
    "IT & Non-IT Opportunities",
    "Career Guidance",
];


const stats = [
    {
        icon: <Users size={18} />,
        title: "5000+",
        subtitle: "Candidates Connected",
    },
];

const trustFeatures = [
    {
        title: "Direct Partnerships",
        description:
            "Access opportunities with hiring managers across leading organizations.",
    },
    {
        title: "Global Network",
        description:
            "Connect with multinational firms and growing startups across North America.",
    },
    {
        title: "Skill Assessment",
        description:
            "Identify your strengths through our professional screening process.",
    },
    {
        title: "Tailored Coaching",
        description:
            "Interview preparation and personalized career guidance.",
    },
    {
        title: "Transparent Feedback",
        description:
            "Receive honest updates at every stage of your application.",
    },
    {
        title: "Long-Term Support",
        description:
            "Our relationship continues even after your successful placement.",
    },
];

const industries = [
    {
        title: "Information Technology",
        icon: <Monitor size={28} />,
    },
    {
        title: "Healthcare",
        icon: <HeartPulse size={28} />,
    },
    {
        title: "Finance & Banking",
        icon: <Landmark size={28} />,
    },
    {
        title: "Engineering",
        icon: <Cog size={28} />,
    },
    {
        title: "Manufacturing",
        icon: <Factory size={28} />,
    },
    {
        title: "Construction",
        icon: <Building2 size={28} />,
    },
    {
        title: "Retail",
        icon: <ShoppingBag size={28} />,
    },
    {
        title: "Professional Services",
        icon: <BriefcaseBusiness size={28} />,
    },
];

const processSteps = [
    {
        number: "1",
        title: "Apply",
        description:
            "Submit your profile or resume through our quick online application process.",
    },
    {
        number: "2",
        title: "Profile Review",
        description:
            "Our recruitment specialists carefully evaluate your skills and experience.",
    },
    {
        number: "3",
        title: "Interview Prep",
        description:
            "Receive interview guidance and personalized career coaching.",
    },
    {
        number: "4",
        title: "Employer Interview",
        description:
            "Meet directly with hiring managers from our trusted partner companies.",
    },
    {
        number: "5",
        title: "Get Hired",
        description:
            "Receive your offer, complete onboarding and begin your new career journey.",
    },
];

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "Senior Cloud Architect",
        review:
            "NexMoveTalent didn't just find me a job—they found the right opportunity that aligned perfectly with my career goals.",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
        name: "David Chen",
        role: "HR Director, Tech Global",
        review:
            "Their recruitment process was transparent, fast and incredibly professional. Highly recommended.",
        image: "https://randomuser.me/api/portraits/men/42.jpg",
    },
    {
        name: "Elena Rodriguez",
        role: "Registered Nurse",
        review:
            "Excellent communication from application to placement. They genuinely cared about my success.",
        image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
];

const Home = () => {
    return (
        <>

            <Helmet>
                <title>NexMoveTalent | Connecting Talent with Opportunity</title>

                <meta
                    name="description"
                    content="NexMoveTalent connects professionals with exciting career opportunities across the United States and Canada."
                />
            </Helmet>


            {/* ================= HERO ================= */}

            <section className="pt-28 pb-20">
                <div className="w-full max-w-345 mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-24 items-center">

                        {/* LEFT */}

                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >

                            {/* Badge */}

                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium">

                                <CheckCircle2 size={16} />

                                Premium Recruitment Partner

                            </div>

                            {/* Heading */}

                            <h1 className="mt-8 text-5xl lg:text-6xl font-bold leading-tight text-slate-900">

                                Build Your Career.

                                <br />

                                Shape Your Future.

                            </h1>

                            {/* Description */}

                            <p className="mt-7 text-lg leading-8 text-slate-600 max-w-xl">

                                Connecting elite talent with top-tier employers across
                                IT, Healthcare, and specialized sectors.

                                Your journey to professional excellence starts here.

                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-wrap gap-5">

                                <Button>

                                    Apply Now

                                </Button>

                                <Button variant="secondary">

                                    Explore Services

                                </Button>

                            </div>

                            {/* Trust Points */}

                            <div className="mt-10 flex flex-wrap gap-8">

                                {trustPoints.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-2 text-sm text-slate-600"
                                    >

                                        <CheckCircle2
                                            size={17}
                                            className="text-emerald-600"
                                        />

                                        {item}

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                        {/* RIGHT */}

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                            className="relative"
                        >

                            {/* Image */}

                            <img
                                src={heroImg}
                                alt="Recruitment"
                                className="
                                w-full
                                max-w-160
                                ml-auto
                                rounded-3xl
                                shadow-2xl  
                                object-cover
                                "
                            />

                            {/* Floating Card */}

                            <motion.div

                                initial={{ y: 15 }}

                                animate={{ y: -15 }}

                                transition={{
                                    repeat: Infinity,
                                    duration: 3,
                                    repeatType: "reverse",
                                }}

                                className="
                                absolute
                                left-8
                                bottom-8
                                bg-white
                                rounded-2xl
                                shadow-xl
                                px-6
                                py-5
                                flex
                                items-center
                                gap-4
                                "
                            >

                                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">

                                    <Users size={20} />

                                </div>

                                <div>

                                    <h4 className="font-bold text-lg">

                                        5000+

                                    </h4>

                                    <p className="text-sm text-slate-500">

                                        Candidates Connected

                                    </p>

                                </div>

                            </motion.div>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* ================= STATS ================= */}

            <section className="pb-20">

                <div className="w-full max-w-345 mx-auto px-6">

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

                        <div>

                            <h2 className="text-5xl lg:text-6xl font-bold">

                                5000+

                            </h2>

                            <p className="mt-3 text-slate-500">

                                Candidates

                            </p>

                        </div>

                        <div>

                            <h2 className="text-5xl lg:text-6xl font-bold">

                                300+

                            </h2>

                            <p className="mt-3 text-slate-500">

                                Hiring Partners

                            </p>

                        </div>

                        <div>

                            <h2 className="text-5xl lg:text-6xl font-bold">

                                98%

                            </h2>

                            <p className="mt-3 text-slate-500">

                                Satisfaction

                            </p>

                        </div>

                        <div>

                            <h2 className="text-5xl lg:text-6xl font-bold">

                                48h

                            </h2>

                            <p className="mt-3 text-slate-500">

                                Initial Response

                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= SERVICES ================= */}

            <section className="py-28 bg-slate-50">
                <div className="w-full max-w-345 mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="text-center max-w-3xl mx-auto"
                    >

                        <span className="text-emerald-600 uppercase tracking-[3px] text-sm font-semibold">
                            OUR SERVICES
                        </span>

                        <h2 className="mt-4 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                            Helping Careers Grow.
                            <br />
                            Helping Businesses Hire.
                        </h2>

                        <p className="mt-6 text-lg text-slate-600 leading-8">
                            Tailored recruitment solutions designed to bridge the gap
                            between ambitious professionals and visionary organizations.
                        </p>

                    </motion.div>

                    {/* Cards */}

                    <div className="grid lg:grid-cols-3 gap-8 mt-20">

                        {/* Card 1 */}

                        <motion.div
                            whileHover={{
                                y: -10,
                                transition: { duration: .3 }
                            }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

                                <Users className="text-emerald-600" />

                            </div>

                            <h3 className="text-2xl font-bold mt-8">

                                Core Recruitment

                            </h3>

                            <p className="mt-5 text-slate-600 leading-8">

                                End-to-end executive search and
                                professional recruitment focused on matching
                                exceptional candidates with industry-leading organizations.

                            </p>

                            <ul className="space-y-3 mt-8">

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Leadership Hiring
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Permanent Recruitment
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Executive Search
                                </li>

                            </ul>

                            <button className="mt-10 font-semibold text-emerald-600 flex items-center gap-2 hover:gap-3 transition-all">

                                Learn More

                                <ArrowRight size={18} />

                            </button>

                        </motion.div>

                        {/* Card 2 */}

                        <motion.div
                            whileHover={{
                                y: -10,
                                transition: { duration: .3 }
                            }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

                                <Briefcase className="text-emerald-600" />

                            </div>

                            <h3 className="text-2xl font-bold mt-8">

                                IT & Non-IT Staffing

                            </h3>

                            <p className="mt-5 text-slate-600 leading-8">

                                Connecting professionals with
                                opportunities across software development,
                                healthcare, finance, engineering,
                                manufacturing and administration.

                            </p>

                            <ul className="space-y-3 mt-8">

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Technical Staffing
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Healthcare Recruitment
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Professional Staffing
                                </li>

                            </ul>

                            <button className="mt-10 font-semibold text-emerald-600 flex items-center gap-2 hover:gap-3 transition-all">

                                Learn More

                                <ArrowRight size={18} />

                            </button>

                        </motion.div>

                        {/* Card 3 */}

                        <motion.div
                            whileHover={{
                                y: -10,
                                transition: { duration: .3 }
                            }}
                            className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                        >

                            <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center">

                                <Code2 className="text-emerald-600" />

                            </div>

                            <h3 className="text-2xl font-bold mt-8">

                                Software Development

                            </h3>

                            <p className="mt-5 text-slate-600 leading-8">

                                Building modern digital products through
                                experienced development teams specializing
                                in web, mobile and enterprise software.

                            </p>

                            <ul className="space-y-3 mt-8">

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Web Applications
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Mobile Applications
                                </li>

                                <li className="flex gap-3">
                                    <CheckCircle2 className="text-emerald-600 mt-1" size={18} />
                                    Custom Enterprise Solutions
                                </li>

                            </ul>

                            <button className="mt-10 font-semibold text-emerald-600 flex items-center gap-2 hover:gap-3 transition-all">

                                Learn More

                                <ArrowRight size={18} />

                            </button>

                        </motion.div>

                    </div>

                </div>
            </section>

            {/* ================= WHY CANDIDATES TRUST ================= */}

            <section className="py-28">

                <div className="w-full max-w-345 mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left Image */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >

                            <img
                                src={trustImg}
                                alt="Candidate Success"
                                className="rounded-3xl shadow-xl w-full object-cover"
                            />

                        </motion.div>

                        {/* Right */}

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: .7 }}
                            viewport={{ once: true }}
                        >

                            <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">
                                WHY NEXMOVETALENT
                            </span>

                            <h2 className="text-5xl lg:text-6xl font-bold leading-tight mt-5">

                                Why Candidates Trust
                                <br />
                                NexMoveTalent

                            </h2>

                            <p className="mt-6 text-lg text-slate-600 leading-8">

                                We do more than connect professionals with jobs.
                                We provide guidance, preparation and long-term
                                career partnerships.

                            </p>

                            <div className="grid md:grid-cols-2 gap-8 mt-12">

                                {trustFeatures.map((item) => (

                                    <div
                                        key={item.title}
                                        className="flex gap-4"
                                    >

                                        <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">

                                            <CheckCircle2
                                                className="text-emerald-600"
                                                size={18}
                                            />

                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-lg">

                                                {item.title}

                                            </h4>

                                            <p className="text-slate-600 mt-2 leading-7">

                                                {item.description}

                                            </p>

                                        </div>

                                    </div>

                                ))}

                            </div>

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* ================= INDUSTRIES ================= */}

            <section className="py-28 bg-slate-50">

                <div className="w-full max-w-345 mx-auto px-6">

                    <motion.div

                        initial={{ opacity: 0, y: 30 }}

                        whileInView={{ opacity: 1, y: 0 }}

                        viewport={{ once: true }}

                        transition={{ duration: .6 }}

                        className="flex flex-col lg:flex-row justify-between items-start lg:items-center"

                    >

                        <div>

                            <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">

                                INDUSTRIES

                            </span>

                            <h2 className="text-4xl font-bold mt-4">

                                Industries We Serve

                            </h2>

                            <p className="mt-4 text-slate-600 max-w-2xl">

                                From innovative startups to multinational organizations,
                                we help professionals find rewarding careers across
                                every major industry.

                            </p>

                        </div>

                        <Button
                            variant="secondary"
                            className="mt-8 lg:mt-0"
                        >
                            View All Sectors
                        </Button>

                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-16">

                        {industries.map((industry, index) => (

                            <motion.div

                                key={industry.title}

                                initial={{ opacity: 0, y: 40 }}

                                whileInView={{ opacity: 1, y: 0 }}

                                transition={{
                                    duration: .5,
                                    delay: index * .08
                                }}

                                viewport={{ once: true }}

                                whileHover={{
                                    y: -8,
                                    scale: 1.02
                                }}

                                className="
                    bg-white
                    rounded-2xl
                    p-8
                    border
                    border-slate-200
                    shadow-sm
                    hover:shadow-xl
                    transition-all
                    duration-300
                    cursor-pointer
                    "

                            >

                                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">

                                    {industry.icon}

                                </div>

                                <h3 className="mt-8 text-xl font-semibold">

                                    {industry.title}

                                </h3>

                                <p className="mt-3 text-slate-500 leading-7">

                                    Specialized recruitment solutions and career
                                    opportunities tailored for this industry.

                                </p>

                                <div className="flex items-center gap-2 mt-8 text-emerald-600 font-semibold">

                                    Explore

                                    <ArrowRight
                                        size={18}
                                    />

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= PROCESS ================= */}

            <section className="bg-slate-950 py-28 overflow-hidden">

                <div className="w-full max-w-345 mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >

                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-400">
                            HOW IT WORKS
                        </span>

                        <h2 className="text-white text-4xl lg:text-5xl font-bold mt-4">
                            How Our Process Works
                        </h2>

                        <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">
                            A transparent recruitment process designed to help candidates
                            confidently move from application to employment.
                        </p>

                    </motion.div>

                    {/* Timeline */}

                    <div className="relative mt-24">

                        {/* Line */}

                        <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-700 hidden lg:block"></div>

                        <div className="grid lg:grid-cols-5 gap-12">

                            {processSteps.map((step, index) => (

                                <motion.div
                                    key={step.number}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: .5,
                                        delay: index * .15,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative text-center"
                                >

                                    {/* Circle */}

                                    <div className="relative z-10 w-14 h-14 mx-auto rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">

                                        {step.number}

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-8 text-xl text-white font-semibold">

                                        {step.title}

                                    </h3>

                                    {/* Description */}

                                    <p className="mt-4 text-slate-400 leading-7">

                                        {step.description}

                                    </p>

                                </motion.div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>

            {/* ================= TESTIMONIALS ================= */}

            <section className="py-28">

                <div className="w-full max-w-345 mx-auto px-6">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >

                        <span className="uppercase tracking-[3px] text-sm font-semibold text-emerald-600">
                            TESTIMONIALS
                        </span>

                        <h2 className="text-4xl font-bold mt-4">
                            Success Stories
                        </h2>

                        <p className="text-slate-600 mt-5 max-w-2xl mx-auto">
                            Thousands of professionals have trusted NexMoveTalent
                            to transform their careers.
                        </p>

                    </motion.div>

                    <div className="grid lg:grid-cols-3 gap-8 mt-16">

                        {testimonials.map((item, index) => (

                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: .5,
                                    delay: index * .15,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                            >

                                <div className="flex text-emerald-500 mb-6">

                                    ★★★★★

                                </div>

                                <p className="text-slate-600 leading-8 italic">

                                    "{item.review}"

                                </p>

                                <div className="flex items-center gap-4 mt-8">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-14 h-14 rounded-full object-cover"
                                    />

                                    <div>

                                        <h4 className="font-semibold">

                                            {item.name}

                                        </h4>

                                        <p className="text-sm text-slate-500">

                                            {item.role}

                                        </p>

                                    </div>

                                </div>

                            </motion.div>

                        ))}

                    </div>

                </div>

            </section>

            {/* ================= FINAL CTA ================= */}

            <section className="relative py-28 overflow-hidden">

                {/* Background Image */}

                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${ctaImg})`,
                    }}
                >

                    <div className="absolute inset-0 bg-slate-900/80"></div>

                </div>

                <div className="relative w-full max-w-345 mx-auto px-6">

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

                        <h2 className="mt-6 text-4xl lg:text-6xl font-bold text-white leading-tight">

                            Your Next Career Move
                            <br />
                            Starts With NexMoveTalent

                        </h2>

                        <p className="mt-8 text-lg text-slate-300 leading-8 max-w-3xl mx-auto">

                            Whether you're a student, graduate, or experienced professional,
                            we're here to connect you with meaningful opportunities across
                            IT, Non-IT, Healthcare, and Software Development.

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

export default Home;