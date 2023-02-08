import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import styles from "../styles/DropdownMenu.module.css";
import { useHistory } from "react-router";

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

export function ProfileEditDropdown({ id }) {
  const history = useHistory();
  return (
    <Dropdown className={`ml-auto px-3 ${styles.Absolute}`} drop="left">
      <Dropdown.Toggle as={PenSquare} />
      <Dropdown.Menu>
        <Dropdown.Item
          className={styles.DropdownList}
          onClick={() => history.push(`/profiles/${id}/edit`)}
          aria-label="edit-profile"
        >
          <i className="fas fa-edit" /> edit profile
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownList}
          onClick={() => history.push(`/profiles/${id}/edit/username`)}
          aria-label="edit-username"
        >
          <i className="far fa-id-card" />
          Edit Username
        </Dropdown.Item>
        <Dropdown.Item
          className={styles.DropdownList}
          onClick={() => history.push(`/profiles/${id}/edit/password`)}
          aria-label="edit-password"
        >
          <i className="fas fa-key" />
          change password
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}