import { Routes, Route } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<AboutPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default AppRouter;
