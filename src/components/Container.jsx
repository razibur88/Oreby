const Container = ({ children, className }) => {
  return (
    <div className={`max-w-Container mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
