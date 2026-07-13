const Footer = () => {
  return (
    <footer className="bg-[#0A1D3A] text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">
          NexMove<span className="text-[#059669]">Talent</span>
        </h3>

        <p className="mt-4 text-slate-300 max-w-xl mx-auto">
          Helping professionals build meaningful careers through trusted
          recruitment and technology solutions.
        </p>

        <p className="mt-8 text-sm text-slate-400">
          © {new Date().getFullYear()} NexMoveTalent. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;