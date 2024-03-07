import { useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useFilter } from "../hooks/useFilter";
import Loader from "../UI/Loader";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost, isLoading, error }) => {
  const [filter, setFilter] = useState({
    sort: "title",
    orderToUp: true,
    search: "",
  });

  const filteredPosts = useFilter(
    posts,
    filter.sort,
    filter.orderToUp,
    filter.search
  );

  return (
    <div className={styles["wrapper"]}>
      <PostFilter filter={filter} setFilter={setFilter} />
      {error && (
        <div className={styles["title"]}>
          <p>{error}</p>
        </div>
      )}
      {!error && isLoading && (
        <div className={styles["title"]}>
          <Loader />
        </div>
      )}
      {!error && !isLoading && !filteredPosts.length && (
        <p className={styles["title"]}>No more posts left</p>
      )}
      {!error && !isLoading && filteredPosts.length && (
        <p className={styles["title"]}>
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </p>
      )}
      <ul className={styles["list"]}>
        <TransitionGroup component={null}>
          {filteredPosts.map((p, index) => (
            <CSSTransition key={p.id} timeout={400} classNames="post">
              <PostItem
                id={p.id}
                title={`${index + 1}. ${p.title}`}
                body={p.body}
                onDeletePost={onDeletePost}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
    </div>
  );
};

export default PostList;
