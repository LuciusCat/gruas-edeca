import PropTypes from 'prop-types';

Nav.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      title: PropTypes.string,
      children: PropTypes.node.isRequired
    })
  ),
  className: PropTypes.string
};

Nav.defaultProps = {
  links: [],
  className: "",
};

const Nav = ({ links = [], className }) => {
  return (
    <nav className={className}>
      {links.map(({ href, title, children }, index) => (
        <a 
          key={index} 
          target="_blank" 
          href={href} 
          title={title} 
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ))}
    </nav>
  );
};

export default Nav;

