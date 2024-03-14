import styles from "./Separator.module.css";

const Separator = ({ text }) => {
  return <div className={styles["separator"]}>{text}</div>;
};

export default Separator;
