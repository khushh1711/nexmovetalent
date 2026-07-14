import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield } from "lucide-react";
import Button from "./Button";

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent-nmt");
    if (!consent) {
      // Slightly delayed trigger for a more polished feel
      const timer = setTimeout(() => {
        setShowBanner(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent-nmt", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent-nmt", "declined");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[9999] max-w-md w-[calc(100vw-3rem)] bg-[#091527] text-white rounded-3xl p-6 shadow-2xl border border-slate-800 flex flex-col gap-5"
        >
          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
              <Shield size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-base text-white">Cookie Consent</h4>
              <p className="text-slate-400 text-xs mt-1.5 leading-5">
                We use cookies to analyze site traffic, personalize your navigation experience, and optimize our recruitment and software development services across USA and Canada.
              </p>
            </div>
          </div>
          
          <div className="flex gap-3 justify-end items-center">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              Decline
            </button>
            <Button
              onClick={handleAccept}
              className="py-2.5 px-5 text-xs rounded-xl"
            >
              Accept All
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
