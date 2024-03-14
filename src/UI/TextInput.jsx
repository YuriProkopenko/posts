import styles from "./TextInput.module.css";

const TextInput = ({ label, type, placeholder, value, onChange }) => {
  return (
    <label className={styles["label"]}>
      {label}
      <input
        className={styles["input"]}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

export default TextInput;
