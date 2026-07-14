const Container = ({ children, className = "" }) => {
  return (
    <div
      className={`
        w-full
        max-w-345
        mx-auto
        px-6
        lg:px-10
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Container;