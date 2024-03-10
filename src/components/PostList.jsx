import { useEffect, useState } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useFilter } from "../hooks/useFilter";
import Loader from "../UI/Loader";
import PostItem from "./PostItem";
import PostFilter from "./PostFilter";
import Pagination from "../UI/Pagination";

import styles from "./PostList.module.css";

const PostList = ({ posts, onDeletePost, isLoading, error }) => {
  const [filter, setFilter] = useState({
    sort: "id",
    orderToUp: true,
    search: "",
  });

  const filteredPosts = useFilter(
    posts,
    filter.sort,
    filter.orderToUp,
    filter.search
  );

  const [currentPage, setCurrentPage] = useState(1);

  const [postsLimit, setPostsLimit] = useState(10);

  const handleChangePage = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePage = () => {
    const postsStart = currentPage * postsLimit - postsLimit;
    const postsEnd = currentPage * postsLimit;
    const postsOnPage = filteredPosts.slice(postsStart, postsEnd);
    if (
      currentPage > 1 &&
      currentPage > Math.ceil(filteredPosts.length / postsLimit)
    ) {
      console.log(currentPage, Math.ceil(filteredPosts.length / postsLimit));
      setCurrentPage(Math.ceil(filteredPosts.length / postsLimit));
    }
    return postsOnPage;
  };

  const postsOnPage = handlePage();

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
      {!error && !isLoading && filteredPosts.length > 0 && (
        <p className={styles["title"]}>
          {filteredPosts.length} {filteredPosts.length === 1 ? "post" : "posts"}
        </p>
      )}
      <ul className={styles["list"]}>
        <TransitionGroup component={null}>
          {postsOnPage.map((p) => (
            <CSSTransition key={p.id} timeout={400} classNames="post">
              <PostItem id={p.id} post={p} onDeletePost={onDeletePost} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </ul>
      <div
        className={`${styles["pagination"]} ${
          !filteredPosts.length ? styles["disabled"] : ""
        }`}
        id="pagination"
      >
        <Pagination
          currentPage={currentPage}
          pagesQuantity={Math.ceil(filteredPosts.length / postsLimit)}
          onChangePage={handleChangePage}
        />
      </div>
    </div>
  );
};

export default PostList;
