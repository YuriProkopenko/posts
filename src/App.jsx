import Button from "./UI/Button";
import PostsForm from "./components/PostsForm";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
      <div className={styles["content"]}>
        <div className={styles["create-btn"]}>
          <Button>Create post</Button>
        </div>
        <div className={styles["create-form"]}>
          <PostsForm />
        </div>
        <div className={styles["posts"]}></div>
      </div>
    </div>
  );
};

export default App;
