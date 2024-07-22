import AboutUs from "../ui/AboutUs";
import styles from "./styles/main.module.css";

export default function Main() {
  return (
    <main className={styles.main}>
      <section>
        <AboutUs />
      </section>
    </main>
  );
}
