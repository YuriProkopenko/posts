import { RxCross1 } from "react-icons/rx";

import styles from "./PostItem.module.css";

const PostItem = ({ name, description }) => {
  return (
    <li className={styles["wrapper"]}>
      <button className={styles["close-btn"]}>
        <RxCross1 size="20px" />
      </button>
      <p>{name}</p>
      <p>{description}</p>
    </li>
  );
};

export default PostItem;
