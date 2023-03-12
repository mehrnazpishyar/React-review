import React from "react";
import styles from "./select.module.css";
import Select from "react-select";

const SortComponent = ({ title, ...rest }) => {
  return (
    <div>
      <div className={styles.selectContainer}>
        <span>{title}</span>
        <Select
          // value={value}
          // onChange={onChange}
          // options={options}
          {...rest}
        />
      </div>
    </div>
  );
};

export default SortComponent;
