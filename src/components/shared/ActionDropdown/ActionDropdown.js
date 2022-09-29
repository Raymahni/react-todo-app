import "./ActionDropdown.css";
import React from "react";

// Icon Imports
import { BsThreeDotsVertical } from "react-icons/bs";

const { useState } = React;

function ActionDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  function toggleDropdown() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div className="Action-dropdown relative">
      <button onClick={toggleDropdown}>
        <BsThreeDotsVertical />
      </button>
      {showDropdown}
      <div className={`Dropdown ${showDropdown ? "show" : ""}`}>
        <ul className="p-l-0 m-y-0">
          <li>Complete</li>
          <li>Edit</li>
          <li>Delete</li>
        </ul>
      </div>
    </div>
  );
}

export default ActionDropdown;
