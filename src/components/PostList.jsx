import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
  return (
    <ul className={styles["wrapper"]}>
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
      </TransitionGroup>
    </ul>
  );
};

export default PostList;
