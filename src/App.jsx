import { useState } from "react";
import Button from "./UI/Button";
import PostsForm from "./components/PostsForm";
import PostList from "./components/PostList";
import postsData from "../src/posts-data";

import styles from "./App.module.css";

const App = () => {
  const [posts, setPosts] = useState(postsData);

  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className={styles["create-btn"]}>
          <Button>Create post</Button>
        </div>
        <div className={styles["create-form"]}>
          <PostsForm />
        </div>
        <section className={styles["posts"]}>
          <PostList posts={posts} />
        </section>
      </div>
    </div>
  );
};

export default App;
