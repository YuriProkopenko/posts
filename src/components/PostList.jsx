import { useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useFilter from "../hooks/useFilter";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
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
      <ul className={styles["list"]}>
        <TransitionGroup component={null}>
          {!filteredPosts.length ? (
            <CSSTransition timeout={400} classNames="postsTitle">
              <p className={styles["title"]}>No more posts left</p>
            </CSSTransition>
          ) : (
            <p className={styles["title"]}>
              {filteredPosts.length}{" "}
              {filteredPosts.length === 1 ? "post" : "posts"}
            </p>
          )}
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
