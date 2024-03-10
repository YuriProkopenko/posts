import Posts from "./pages/Posts";
import About from "./pages/About";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
      <header className={styles["header"]}></header>
      <main className={styles["main"]}>
        <section className={styles["aside-left"]}></section>
        <section className={styles["content"]}>
          <About />
        </section>
        <section className={styles["aside-right"]}></section>
      </main>
      <footer className={styles["footer"]}></footer>
    </div>
  );
};

export default App;
