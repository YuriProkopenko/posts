import PostItem from "./PostItem";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
  return (
    <ul className={styles["wrapper"]}>
      {posts.map((p, index) => (
        <PostItem
          key={p.id}
          id={p.id}
          name={`${index + 1}. ${p.name}`}
          description={p.description}
          onDeletePost={onDeletePost}
        />
      ))}
    </ul>
  );
};

export default PostList;
