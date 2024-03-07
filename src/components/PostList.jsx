import { useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useFilter from "../hooks/useFilter";
import Loader from "../UI/Loader";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost, isLoading }) => {
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
      {isLoading && (
        <div className={styles["title"]}>
          <Loader />
        </div>
      )}
      {!isLoading && !filteredPosts.length && (
        <p className={styles["title"]}>No more posts left</p>
      )}
      {!isLoading && filteredPosts.length && (
        <p className={styles["title"]}>
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </p>
      )}
      {/* {!filteredPosts.length ? (
        <p className={styles["title"]}>No more posts left</p>
      ) : (
        <p className={styles["title"]}>
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </p>
      )} */}
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
