import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoEnterOutline } from "react-icons/io5";

import styles from "./PostItem.module.css";

const PostItem = ({ id, post, onDeletePost }) => {
  return (
    <li className={styles["wrapper"]}>
      <Link className={styles["enter-btn"]} to={`/posts/${id}`}>
        <IoEnterOutline size="23px" />
      </Link>
      <button
        className={styles["close-btn"]}
        onClick={() => {
          onDeletePost(id);
        }}
      >
        <RxCross1 size="20px" />
      </button>
      <p className={styles["title"]}>{`${post.id}. ${post.title}`}</p>
      <p>{post.body}</p>
    </li>
  );
};

export default PostItem;
