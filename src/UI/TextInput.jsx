import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, ...props }) => {
  return (
    <input className={styles["wrapper"]} placeholder={placeholder}></input>
  );
};

export default TextInput;
