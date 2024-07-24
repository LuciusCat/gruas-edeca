import PropTypes from "prop-types";
import styles from "./styles/servicesFooter.module.css";

export default function ServicesFooter({ services }) {
  return (
    <article className={styles.servicesFooter}>
      <h3>Servicios</h3>
      {services.map(({ href, text }, index) => (
        <a href={href} key={index}>
          {text}
        </a>
      ))}
    </article>
  );
}

ServicesFooter.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};
