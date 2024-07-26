import Contact from "./Contact";
import Form from "./Form";
import styles from "./styles/contactMain.module.css";

export default function ContactMain() {
  return (
    <section className={styles.contactMain}>
      <article className={styles.contactMain__right}>
        <div className={styles.contactMain__info}>
          <h2>Contáctenos</h2>
          <Contact />
        </div>

        <figure>
          <figcaption>
            <h3>¿Cómo llegar?</h3>
          </figcaption>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.7663242052736!2d-77.06976602418503!3d-12.059592542141273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9235a033bab%3A0xc23edd765fc1c46d!2sAv.%20la%20Alborada%201185%2C%20Lima%2015088!5e0!3m2!1ses-419!2spe!4v1721956380058!5m2!1ses-419!2spe" />
        </figure>
      </article>

      <Form />
    </section>
  );
}
