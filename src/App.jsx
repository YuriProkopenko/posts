import AppRouter from "./routing/AppRouter";
import Header from "./components/header/Header";

import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles["wrapper"]}>
      <Header />
      <main className={styles["main"]}>
        <section className={styles["aside-left"]}></section>
        <section className={styles["content"]}>
          <AppRouter />
        </section>
        <section className={styles["aside-right"]}></section>
      </main>
      <footer className={styles["footer"]}></footer>
    </div>
  );
};

export default App;
