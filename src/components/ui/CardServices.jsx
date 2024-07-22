import PropTypes from "prop-types";
import styles from "./styles/cardServices.module.css";
export default function CardServices({ service, src, alt }) {
  return (
    <article className={styles.cardServices}>
      <h3>{service}</h3>
      <img src={src} alt={alt} />
    </article>
  );
}

CardServices.propTypes = {
  service: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
