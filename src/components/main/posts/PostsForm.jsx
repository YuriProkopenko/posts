import { useState } from "react";
import TextInput from "../../../UI/TextInput";
import TextArea from "../../../UI/TextArea";
import Button from "../../../UI/Button";

import styles from "./PostsForm.module.css";

const PostsForm = ({ onCreatePost }) => {
  const [post, setPost] = useState({ title: "", description: "" });

  const handleNewPost = (e) => {
    e.preventDefault();
    const newPost = { ...post, id: Date.now() };
    onCreatePost(newPost);
    setPost((post) => (post = { title: "", description: "" }));
  };

  return (
    <div className={styles["wrapper"]}>
      <TextInput
        placeholder="name..."
        value={post.title}
        onChange={(e) =>
          setPost((post) => (post = { ...post, title: e.target.value }))
        }
      />
      <TextArea
        placeholder="description..."
        value={post.description}
        onChange={(e) =>
          setPost((post) => (post = { ...post, description: e.target.value }))
        }
      />
      <div className={styles["confirm-btn"]}>
        <Button onClick={handleNewPost}>Confirm</Button>
      </div>
    </div>
  );
};

export default PostsForm;
