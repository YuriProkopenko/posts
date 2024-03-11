import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
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
        <NavLink
          className={({ isActive }) =>
            isActive ? styles["link-active"] : styles["link"]
          }
          to="/posts"
        >
          Posts
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
