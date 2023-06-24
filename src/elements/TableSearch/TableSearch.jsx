import React from "react";
import styles from "./TableSearch.module.css";
import vector from "../../assets/icons/Vector.svg";

const TableSearch = ({ onClick, onChange, value, onKeyDown, onKeyPress }) => {
  return (
    <div className={`${styles.search} me-auto`} id="search">
      <input
        id="searchinput"
        type="text"
        className={`${styles.searchinput} form-control`}
        placeholder="Search..."
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <img
        src={vector}
        alt=""
        className={styles.vector}
        onClick={onClick}
        id="searchIcon"
      />
    </div>
  );
};

export default TableSearch;
