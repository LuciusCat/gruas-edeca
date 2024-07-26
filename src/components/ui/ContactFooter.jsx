import styles from "./styles/contactFooter.module.css";
import SocialLinks from "./SocialLinks";
import { redes } from "../../assets/redes";
import Contact from "./Contact";

export default function ContactFooter() {
  return (
    <article className={styles.contactFooter}>
      <h3>Contacto</h3>

      <Contact />

      <SocialLinks redes={redes} />

      <p className={styles.copyright}>
        Copyright © 2024 GruasEdeca - Todos los derechos reservados.
      </p>
    </article>
  );
}
