import { RxCross1 } from "react-icons/rx";

import styles from "./PostItem.module.css";

const PostItem = ({ id, name, description, onDeletePost }) => {
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
      <p>{name}</p>
      <p>{description}</p>
    </li>
  );
};

export default PostItem;
