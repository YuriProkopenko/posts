import { useMemo, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost }) => {
  const [filter, setFilter] = useState({
    sort: "name",
    orderToUp: true,
    search: "",
  });

  const filteredPosts = useMemo(() => {
    let newPosts = posts;
    newPosts = posts.sort((a, b) =>
      a[filter.sort].localeCompare(b[filter.sort])
    );
    if (filter.orderToUp === false) newPosts.reverse();
    newPosts = newPosts.filter((p) =>
      p.name.toLowerCase().includes(filter.search.toLowerCase())
    );
    return newPosts;
  }, [posts, filter]);

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
