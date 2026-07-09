import "./Button.css";

const Button = ({ children, variant = "primary" }) => {
  return (
    <button className={`btn ${variant}`}>
      {children}
    </button>
  );
};

export default Button;