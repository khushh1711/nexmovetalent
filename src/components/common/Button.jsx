import { motion } from "framer-motion";

const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  ...props
}) => {
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 shadow-lg hover:shadow-xl",

    secondary:
      "border-2 border-slate-200 bg-white text-slate-900 hover:bg-slate-50",

    dark:
      "bg-slate-900 text-white hover:bg-slate-800",
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      whileHover={{ y: -3, scale: 1.015 }}
      whileTap={{ scale: 0.985 }}
      transition={{ type: "spring", stiffness: 450, damping: 15 }}
      className={`
        inline-flex
        items-center
        justify-center
        px-7
        py-3.5
        rounded-xl
        font-semibold
        cursor-pointer
        transition-colors
        duration-300
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;