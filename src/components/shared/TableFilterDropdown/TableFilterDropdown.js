import "./TableFilterDropdown.css";
import React from "react";

// Icon Imports
import { FiChevronDown } from "react-icons/fi";

const { useState } = React;

function TableFilterDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="Table-filter-dropdown relative">
      <button className="d-flex align-center" onClick={toggleDropdown}>
        <p className="m-r-2 m-y-0">{"Last 7 days"}</p>
        <FiChevronDown />
      </button>
      {showDropdown}
      <div className={`Dropdown ${showDropdown ? "show" : ""}`}>
        <ul className="p-l-0 m-y-0">
          <li>
            <input type="radio" id="option1" name="option1" />
            <p>Last day</p>
          </li>
          <li>
            <input type="radio" id="option2" name="option2" />
            <p>Last 7 days</p>
          </li>
          <li>
            <input type="radio" id="option3" name="option3" />
            <p>Last 30 days</p>
          </li>
          <li>
            <input type="radio" id="option4" name="option4" />
            <p>Last quarter</p>
          </li>
          <li>
            <input type="radio" id="option5" name="option5" />
            <p>Last year</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TableFilterDropdown;
