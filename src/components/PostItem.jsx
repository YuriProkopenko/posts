import { RxCross1 } from "react-icons/rx";

import styles from "./PostItem.module.css";

const PostItem = ({ id, title, body, onDeletePost }) => {
  return (
    <li className={styles["wrapper"]}>
      <button
        className={styles["close-btn"]}
        onClick={() => {
          onDeletePost(id);
        }}
      >
        <RxCross1 size="20px" />
      </button>
      <p className={styles["title"]}>{title}</p>
      <p>{body}</p>
    </li>
  );
};

export default PostItem;
