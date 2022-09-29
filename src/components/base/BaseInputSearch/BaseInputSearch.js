import "./BaseInputSearch.css";

// Icon Imports
import { FiSearch } from "react-icons/fi";

function BaseInputSearch() {
  return (
    <div className="Input-search-field relative float-right">
      <input placeholder="Search anything..." />
      <FiSearch className="Search-icon absolute" />
    </div>
  );
}

export default BaseInputSearch;
