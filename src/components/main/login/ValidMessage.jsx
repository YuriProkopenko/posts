import styles from "./ValidMessage.module.css";

const ValidMessage = ({ text, isActive }) => {
  return <div className={styles["wrapper"]}>{text}</div>;
};

export default ValidMessage;
