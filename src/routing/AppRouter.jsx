import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import AboutPage from "../pages/AboutPage";
import PostsPage from "../pages/PostsPage";
import ErrorPage from "../pages/ErrorPage";
import PostDetails from "../pages/PostDetails";
import Login from "../components/main/login/Login";
import Register from "../components/main/login/Register";
import AuthRequire from "../HOCs/AuthRequire";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/about" replace />} />
        <Route path="about" element={<AboutPage />} />
        <Route
          path="posts"
          element={
            <AuthRequire>
              <PostsPage />
            </AuthRequire>
          }
        />
        <Route
          path="posts/:id"
          element={
            <AuthRequire>
              <PostDetails />
            </AuthRequire>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
