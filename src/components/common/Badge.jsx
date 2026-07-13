const Badge = ({ children }) => {
  return (
    <span
      className="
      inline-flex
      items-center
      bg-emerald-50
      text-emerald-700
      px-4
      py-2
      rounded-full
      font-semibold
      text-sm
      "
    >
      {children}
    </span>
  );
};

export default Badge;