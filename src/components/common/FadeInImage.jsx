import { useState } from "react";

const FadeInImage = ({ src, alt, className = "", ...props }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`overflow-hidden relative bg-slate-100/50 ${className}`}>
      {/* Soft loading background animation */}
      {!loaded && (
        <div className="absolute inset-0 bg-slate-200/50 animate-pulse"></div>
      )}
      
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-1000 cubic-bezier(0.4, 0, 0.2, 1) ${
          loaded ? "opacity-100 blur-0 scale-100" : "opacity-0 blur-md scale-102"
        }`}
        {...props}
      />
    </div>
  );
};

export default FadeInImage;
