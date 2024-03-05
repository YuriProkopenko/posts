import PostItem from "./PostItem";

import styles from "./PostList.module.css";

const PostList = ({ posts }) => {
  return (
    <ul className={styles["wrapper"]}>
      {posts.map((p, index) => (
        <PostItem
          key={p.id}
          name={`${index + 1}. ${p.name}`}
          description={p.description}
        />
      ))}
    </ul>
  );
};

export default PostList;
