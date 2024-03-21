import { NavLink } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import styles from "./Header.module.css";

const Header = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut();
  };

  return (
    <header className={styles["wrapper"]}>
      <div className={styles["menu"]}>
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["link-active"] : styles["link"]
          }
          to="/about"
        >
          About
        </NavLink>
        {user && (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles["link-active"] : styles["link"]
              }
              to="/posts"
            >
              Posts
            </NavLink>
            <div className={styles["user"]}>{user.email}</div>
            <div className={styles["link"]} onClick={handleLogOut}>
              Logout
            </div>
          </>
        )}
        {!user && (
          <NavLink
            className={({ isActive }) =>
              isActive ? styles["link-active"] : styles["link"]
            }
            to="/login"
          >
            Login
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
