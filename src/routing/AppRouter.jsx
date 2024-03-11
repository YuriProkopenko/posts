import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import ErrorPage from "../pages/ErrorPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AboutPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="posts" element={<PostsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
