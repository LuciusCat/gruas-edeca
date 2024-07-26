import { useState } from "react";
import PropTypes from "prop-types";
import "./styles/dropDownNav.css";

const DropDownNav = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
            <a key={index} href={item.href} className="dropdown-item">
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
    })
  ).isRequired,
};

export default DropDownNav;
