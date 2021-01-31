import React from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

//Components
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={showAdd ? "red" : "green"}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

//Setup PropsTypes of props
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//Create Default Props
Header.defaultProps = {
  title: "Task Tracker",
};

//Styling in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
