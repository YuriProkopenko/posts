import styles from "./TextInput.module.css";

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <input
      className={styles["wrapper"]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    ></input>
  );
};

export default TextInput;
