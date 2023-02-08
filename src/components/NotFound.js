import React from "react";
import Nothing from "../assets/empty_search.png";
import styles from "../styles/NotFound.module.css";
import Asset from "./Asset";

const NotFound = () => {
  return (
    <div className={styles.NotFound}>
      <Asset
        src={Nothing}
        message={`Sorry, this box is empty!`}
      />
    </div>
  );
};

export default NotFound;