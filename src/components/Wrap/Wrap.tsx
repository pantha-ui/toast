import React from "react";
import styles from "./Wrap.module.scss";

const Wrap = ({ children }) => {
  return (
    <div className={styles.main}>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Wrap;