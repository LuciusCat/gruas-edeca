import PropTypes from "prop-types";
import styles from "./styles/socialLinks.module.css";

function SocialLinks({ redes }) {
  return (
    <div className={styles.socialLinks}>
      {redes.map(({ href, src, alt }, index) => (
        <a href={href} key={index} target="_blank" rel="noopener noreferrer">
          <img src={src} alt={alt} />
        </a>
      ))}
    </div>
  );
}

SocialLinks.propTypes = {
  redes: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialLinks;
