import styles from "./Button.module.css";

const Button = ({ children, disabled, onClick }) => {
  return (
    <button
      className={`${styles["wrapper"]} ${disabled ? styles["disabled"] : ""}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
