import TextInput from "../UI/TextInput";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";

import styles from "./PostsForm.module.css";
import { useState } from "react";

const PostsForm = ({ onCreatePost }) => {
  const [post, setPost] = useState({ name: "", description: "" });

  const handleNewPost = (e) => {
    e.preventDefault();
    const newPost = { id: Date.now(), ...post };
    onCreatePost(newPost);
    setPost((post) => (post = { name: "", description: "" }));
  };

  return (
    <div className={styles["wrapper"]}>
      <TextInput
        placeholder="name..."
        value={post.name}
        onChange={(e) =>
          setPost((post) => (post = { ...post, name: e.target.value }))
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
