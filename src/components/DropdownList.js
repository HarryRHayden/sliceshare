import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/DropdownMenu.module.css";

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

export const DropdownToggle = ({handleEdit, handleDelete}) => {
  return (
    <Dropdown className="ml-auto" drop="down">
      <Dropdown.Toggle as={PenSquare} />

      <Dropdown.Menu
        className={`text-center ${styles.DropdownMenu}`}
        popperConfig={{ strategy: "fixed" }}
      >
        <Dropdown.Item 
            className={styles.DropdownList}
            onClick={handleEdit}
            aria-label="edit"
        >
            <i className="fas fa-pen-to-square" />
        </Dropdown.Item>
        <Dropdown.Item
            className={styles.DropdownList}
            onClick={handleDelete}
            aria-label="delete"
        >
            <i className="fas fa-trash-can" />
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
