import { useState } from "react";
import PropTypes from "prop-types";
import "./styles/dropDownNav.css";

const DropDownNav = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (event, href) => {
    if (href.startsWith("#")) {
      event.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="dropdown-navbar">
      <button
        className="dropdown-button"
        onClick={toggleDropdown}
        name="Botón que despliega el menú"
      />
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="dropdown-item"
              onClick={(e) => handleNavClick(e, item.href)}
            >
              {item.children}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

DropDownNav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      children: PropTypes.node.isRequired,
    })
  ).isRequired,
};

export default DropDownNav;
