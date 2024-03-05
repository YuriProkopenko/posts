import styles from "./TextArea.module.css";

const TextArea = ({ placeholder, value, onChange }) => {
  return (
    <textarea
      className={styles["wrapper"]}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextArea;
