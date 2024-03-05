import styles from "./TextArea.module.css";

const TextArea = ({ placeholder }) => {
  return (
    <textarea
      className={styles["wrapper"]}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
