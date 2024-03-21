import ReactDOM from "react-dom";
import { useState } from "react";
import { Transition } from "react-transition-group";

import styles from "./PopupNote.module.css";

const portal = document.getElementById("portal");

const PopupNote = ({ message, isActive }) => {
  return ReactDOM.createPortal(
    <Transition in={isActive} timeout={500} mountOnEnter unmountOnExit>
      {(state) => (
        <div className={`${styles["wrapper"]} ${styles[`${state}`]}`}>
          {message}
        </div>
      )}
    </Transition>,
    portal
  );
};

export default PopupNote;
