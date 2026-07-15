import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../../assets/logo/NMT-logo-3.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Contact Us",
      path: "/contact",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-lg shadow-sm"
        : "bg-transparent"
        }`}
    >
      <div className="w-full max-w-345 mx-auto px-6 lg:px-10 xl:px-12">

        <div className="flex items-center justify-between h-24">

          {/* Logo */}

          <NavLink
            to="/"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={logo}
              alt="NexMoveTalent Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="relative py-2 font-semibold transition duration-300"
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-[#059669]" : "text-slate-700 hover:text-[#059669]"}>
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navActiveLine"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#059669] rounded-full"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">

            <button
              onClick={() => navigate("/contact?role=candidate")}
              className="
            bg-emerald-600
            text-white
              px-7
              py-3.5
              rounded-xl
              font-semibold
              shadow-md
            hover:bg-emerald-700
              hover:shadow-lg
              transition-all
              duration-300
              cursor-pointer
              "
            >
              Apply Now
            </button>

          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white shadow-lg overflow-hidden border-t border-slate-100"
          >

            <div className="flex flex-col px-6 py-6 gap-5">

              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenu(false)}
                  className={({ isActive }) =>
                    `font-semibold transition duration-300 ${isActive ? "text-[#059669]" : "text-slate-700 hover:text-[#059669]"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  setMobileMenu(false);
                  navigate("/contact?role=candidate");
                }}
                className="
                mt-3
                bg-[#059669]
                text-white
                py-3
                rounded-xl
                font-semibold
                hover:bg-emerald-700
                transition-colors
                cursor-pointer
                "
              >
                Apply Now
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;