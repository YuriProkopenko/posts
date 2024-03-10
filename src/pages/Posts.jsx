import { useState, useEffect } from "react";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import Modal from "../UI/Modal";
import Button from "../UI/Button";
import PostsForm from "../components/PostsForm";
import PostList from "../components/PostList";

import styles from "./Posts.module.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPosts(posts);
  });
  useEffect(() => {
    fetchPosts();
  }, []);

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
      <div className={styles["create-btn"]}>
        <Button onClick={() => setIsModalOpen(true)}>Create post</Button>
      </div>
      <section className={styles["post-list"]}>
        <PostList
          posts={posts}
          onDeletePost={handleDeletePost}
          isLoading={isPostsLoading}
          error={postError}
        />
      </section>
    </div>
  );
};

export default Posts;
