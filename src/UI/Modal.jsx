import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";

import styles from "./Modal.module.css";
import React from "react";

const portal = document.getElementById("portal");

const Modal = ({ children, isOpen, onClose }) => {
  if (isOpen)
    return ReactDOM.createPortal(
      <div className={styles["wrapper"]} onClick={onClose}>
        <div className={styles["content"]} onClick={(e) => e.stopPropagation()}>
          <button className={styles["close-btn"]} onClick={onClose}>
            <ImCross size="20px" />
          </button>
          {children}
        </div>
      </div>,
      portal
    );
  else return null;
};

export default Modal;
