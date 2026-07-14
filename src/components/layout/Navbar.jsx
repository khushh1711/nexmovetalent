import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo/NMT-logo-3.png";

const Navbar = () => {

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
              className="h-14 md:h-16 w-auto object-contain"
            // className="h-12 md:h-14 lg:h-16 w-auto object-contain" //old one
            />
          </NavLink>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className={({ isActive }) =>
                  `font-semibold transition duration-300 ${isActive
                    ? "text-[#059669]"
                    : "text-slate-700 hover:text-[#059669]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">

            <button
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

      {mobileMenu && (
        <div className="lg:hidden bg-white shadow-lg">

          <div className="flex flex-col px-6 py-6 gap-5">

            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenu(false)}
                className="font-semibold text-slate-700 hover:text-[#059669]"
              >
                {link.name}
              </NavLink>
            ))}

            <button
              className="
              mt-3
              bg-[#059669]
              text-white
              py-3
              rounded-xl
              font-semibold
              "
            >
              Apply Now
            </button>

          </div>

        </div>
      )}
    </header>
  );
};

export default Navbar;