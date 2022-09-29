import "./Sidebar.css";
import logo from "../../../assets/images/todo-logo.png";

// Icon Imports
import {
  GrAppsRounded,
  GrDrawer,
  GrSend,
  GrServices,
  GrCatalogOption,
  GrFolderOpen,
} from "react-icons/gr";

function Sidebar() {
  return (
    <div className="Sidebar">
      {/* Sidebar Logo */}
      <div className="Sidebar-logo m-x-auto m-t-3">
        <img src={logo} alt="Todo Logo" />
      </div>

      {/* Sidebar Menu */}
      <div className="Sidebar-menu">
        <ul>
          <li className="active">
            <GrAppsRounded />
          </li>
          <li>
            <GrDrawer />
          </li>
          <li>
            <GrCatalogOption />
          </li>
          <li>
            <GrServices />
          </li>
          <li>
            <GrSend />
          </li>
          <li>
            <GrFolderOpen />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
