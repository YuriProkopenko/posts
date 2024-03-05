import { useState } from "react";
import Modal from "./UI/Modal";
import Button from "./UI/Button";
import PostsForm from "./components/PostsForm";
import PostList from "./components/PostList";
import postsData from "../src/posts-data";

import styles from "./App.module.css";

const App = () => {
  const [posts, setPosts] = useState(postsData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCreatePost = (post) => {
    setPosts([...posts, post]);
    setIsModalOpen(false);
  };
  const handleDeletePost = (postId) => {
    setPosts(posts.filter((p) => p.id != postId));
  };

  return (
    <div className={styles["wrapper"]}>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <PostsForm onCreatePost={handleCreatePost} />
      </Modal>
      <div className={styles["content"]}>
        <div className={styles["create-btn"]}>
          <Button onClick={() => setIsModalOpen(true)}>Create post</Button>
        </div>
        <section className={styles["posts"]}>
          <PostList posts={posts} onDeletePost={handleDeletePost} />
        </section>
      </div>
    </div>
  );
};

export default App;
