const Button = ({
  children,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const variants = {
    primary:
      "bg-emerald-600 text-white hover:bg-emerald-700 hover:-translate-y-1 shadow-lg hover:shadow-xl",

    secondary:
      "border border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:-translate-y-1",

    dark:
      "bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1",
  };

  return (
    <button
      type={type}
      className={`
        inline-flex
        items-center
        justify-center
        px-7
        py-4
        rounded-xl
        font-semibold
        transition-all
        duration-300
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;