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
      <a href="#">Más información</a>
    </article>
  );
}

CardServices.propTypes = {
  service: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
