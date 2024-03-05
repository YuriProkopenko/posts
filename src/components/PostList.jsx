import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
  return (
    <div className={styles["wrapper"]}>
      <ul className={styles["list"]}>
        <TransitionGroup component={null}>
          {posts.map((p, index) => (
            <CSSTransition key={p.id} timeout={400} classNames="post">
              <PostItem
                id={p.id}
                name={`${index + 1}. ${p.name}`}
                description={p.description}
                onDeletePost={onDeletePost}
              />
            </CSSTransition>
          ))}
          {!posts.length && (
            <CSSTransition timeout={400} classNames="postsTitle">
              <p className={styles["title"]}>No more posts left</p>
            </CSSTransition>
          )}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default PostList;
