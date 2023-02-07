import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
// import styles from "../styles/DropdownList.module.css";

// The forwardRef is important!!
// Dropdown needs access to the DOM node in order to position the Menu
const PenSquare = React.forwardRef(({ onClick }, ref) => (
  <i
    className="fas fa-pen-to-square"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  />
));

export const DropdownToggle = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle as={PenSquare} />

      <Dropdown.Menu
        className="text-center"
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item eventKey="1">Red</Dropdown.Item>
        <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
        <Dropdown.Item eventKey="3" active>
          Orange
        </Dropdown.Item>
        <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
