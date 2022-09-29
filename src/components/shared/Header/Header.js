import "./Header.css";

// Icon Imports
import { FiBell, FiChevronDown } from "react-icons/fi";

// Image Imports
import profile from "../../../assets/images/profile-pic.png";

// Component Imports
import BaseInputSearch from "../../base/BaseInputSearch/BaseInputSearch";

function Header() {
  return (
    <div className="Header d-flex align-center">
      {/* Input Search Area */}
      <div className="Input-search-area">
        <BaseInputSearch />
      </div>

      {/* Profile Area */}
      <div className="Profile-area align-center">
        <ul className="d-flex float-right p-l-0 m-y-0 align-center">
          <li className="Notification relative m-t-2">
            <FiBell />
            <div className="Notification-badge absolute text-center">2</div>
          </li>
          <li className="Profile-picture d-flex align-center">
            <img src={profile} alt="Profile" className="m-r-2" />
            <FiChevronDown className="font-4" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
