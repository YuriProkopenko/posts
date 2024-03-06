import { useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import useFilter from "../hooks/useFilter";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
  const [filter, setFilter] = useState({
    sort: "name",
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
          {filteredPosts.map((p, index) => (
            <CSSTransition key={p.id} timeout={400} classNames="post">
              <PostItem
                id={p.id}
                name={`${index + 1}. ${p.name}`}
                description={p.description}
                onDeletePost={onDeletePost}
              />
            </CSSTransition>
          ))}
          {!filteredPosts.length && (
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
