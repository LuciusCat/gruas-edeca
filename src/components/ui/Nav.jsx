import PropTypes from "prop-types";

const Nav = ({ src, alt, links = [], className = "" }) => {
  return (
    <nav className={className}>
      <img src={src} alt={alt} />
      {links.map(({ href, children }, index) => (
        <a key={index} href={href}>
          {children}
        </a>
      ))}
    </nav>
  );
};

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    })
  ),
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
};

export default Nav;
