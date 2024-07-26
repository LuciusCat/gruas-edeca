import PropTypes from "prop-types";
import styles from "./styles/cardServices.module.css";
export default function CardServices({ service, src, alt, text }) {
  return (
    <article className={styles.cardServices}>
      <img src={src} alt={alt} />
      <div className={styles.cardServices__body}>
        <h3>{service}</h3>
        <p>{text}</p>
      </div>
      <a
        href="https://wa.me/+51933753428/?text=Hola%2C%20quisiera%20una%20m%grua%20para%20mi%20vehiculo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Más información
      </a>
    </article>
  );
}

CardServices.propTypes = {
  service: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
