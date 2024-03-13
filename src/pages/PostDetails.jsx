import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetching } from "../hooks/useFetching";
import PostService from "../API/PostService";
import { IoArrowUndoOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import Loader from "../UI/Loader";

import styles from "./PostDetails.module.css";

const PostDetails = ({ onClick }) => {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: 1,
    title: "",
    body: "",
    comments: [],
  });
  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const post = await PostService.getById(id);
    const comments = await PostService.getCommentsByPostId(id);
    setPost({ ...post, comments });
  });
  useEffect(() => {
    fetchPosts();
  }, []);

  const navigate = useNavigate();

  console.log(post);

  return (
    <section className={styles["wrapper"]}>
      <div className={styles["header"]}>
        <button className={styles["back-btn"]} onClick={() => navigate(-1)}>
          <IoLogOutOutline size="25px" />
        </button>
      </div>
      {postError && (
        <div>
          <p>{postError}</p>
        </div>
      )}
      {!postError && isPostsLoading && <Loader />}
      {!postError && !isPostsLoading && post && (
        <>
          <div className={styles["post"]}>
            <div className={styles["title"]}>
              {post.id}. {post.title}
            </div>
            <div className={styles["body"]}>{post.body}</div>
          </div>
          <ul className={styles["comments"]}>
            {post.comments.map((c) => (
              <li key={c.id}>
                <p className={styles["comments-email"]}>{c.email}</p>
                <p className={styles["comments-name"]}>{c.name}</p>
                <p className={styles["comments-body"]}>{c.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </section>
  );
};

export default PostDetails;
