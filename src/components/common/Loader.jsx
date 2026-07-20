import { motion } from "framer-motion";
import logo from "../../assets/logo/NMT-logo-3.png"; // Change filename if needed

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed inset-0 z-9999 bg-white flex items-center justify-center overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute w-162.5 h-162.5 rounded-full bg-emerald-100 blur-[140px] opacity-60"></div>

      <div className="relative flex flex-col items-center">

        {/* Logo */}

        <motion.img
          src={logo}
          alt="NexMoveTalent"
          className="w-44 md:w-52 lg:w-60 object-contain"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{
            scale: [1, 1.04, 1],
            opacity: 1,
          }}
          transition={{
            opacity: {
              duration: 0.8,
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />

        {/* Company Name */}

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-4xl md:text-5xl font-bold text-slate-900"
        >
          NexMove<span className="text-emerald-600">Talent</span>
        </motion.h1>

        {/* Tagline */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-3 text-slate-500 text-lg tracking-wide"
        >
          Connecting Talent • Creating Future
        </motion.p>

        {/* Progress Bar */}

        <div className="mt-12 w-72 md:w-96 h-1.5 bg-slate-200 rounded-full overflow-hidden">

          <motion.div
            className="h-full rounded-full bg-linear-to-r from-emerald-500 to-emerald-400"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: 2.2,
              ease: "easeInOut",
            }}
          />

        </div>

        {/* Loading */}

        <motion.p
          animate={{
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
          }}
          className="mt-6 text-slate-500 tracking-[4px] uppercase text-sm"
        >
          Loading...
        </motion.p>

      </div>
    </motion.div>
  );
};

export default Loader;