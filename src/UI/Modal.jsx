import { ImCross } from "react-icons/im";

import styles from "./Modal.module.css";

const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div
      className={`${styles["wrapper"]} ${isOpen ? styles["open"] : ""}`}
      onClick={onClose}
    >
      <div className={styles["content"]} onClick={(e) => e.stopPropagation()}>
        <button className={styles["close-btn"]} onClick={onClose}>
          <ImCross size="20px" />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
