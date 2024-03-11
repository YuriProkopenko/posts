import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles["wrapper"]}>
      <div className={styles["menu"]}>
        <Link className={styles["link"]} to="/about">
          About
        </Link>
        <Link className={styles["link"]} to="/posts">
          Posts
        </Link>
      </div>
    </header>
  );
};

export default Header;
