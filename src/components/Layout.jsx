import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

import styles from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={styles["wrapper"]}>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["aside-left"]}></section>
        <section className={styles["content"]}>
          <Outlet />
        </section>
        <section className={styles["aside-right"]}></section>
      </main>
      <footer className={styles["footer"]}></footer>
    </div>
  );
};

export default Layout;
