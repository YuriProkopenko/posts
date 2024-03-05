import TextInput from "../UI/TextInput";
import TextArea from "../UI/TextArea";
import Button from "../UI/Button";

import styles from "./PostsForm.module.css";

const PostsForm = () => {
  return (
    <div className={styles["wrapper"]}>
      <TextInput placeholder="name..." />
      <TextArea placeholder="description..." />
      <div className={styles["confirm-btn"]}>
        <Button>Confirm</Button>
      </div>
    </div>
  );
};

export default PostsForm;
