const StatCard = ({ number, text }) => {
  return (
    <div
      className="
      bg-white
      rounded-3xl
      p-6
      shadow-md
      border
      border-slate-100
      text-center
      "
    >
      <h2 className="text-4xl font-extrabold text-[#0A1D3A]">
        {number}
      </h2>

      <p className="text-slate-500 mt-2">
        {text}
      </p>
    </div>
  );
};

export default StatCard;