import "./TaskStats.css";
import littleGraphRed from "../../../assets/images/little-graph-red.png";
import littleGraphOrange from "../../../assets/images/little-graph-orange.png";
import littleGraphGreen from "../../../assets/images/little-graph-green.png";

// Icon Imports
import { FiStar } from "react-icons/fi";
import { GrDocumentText, GrCopy } from "react-icons/gr";

// Component Imports
import BaseDivider from "../../base/BaseDivider/BaseDivider";

// Single Stat Item
const StatItem = (props) => (
  <div className="Stat-item">
    {/* Stats Header */}
    <div className="d-flex align-center justify-between m-b-5">
      <div className="d-flex align-center">
        <div className="Stats-icon text-center m-r-2">
          {props.icon === "star" ? (
            <FiStar />
          ) : props.icon === "note" ? (
            <GrDocumentText />
          ) : (
            <GrCopy />
          )}
        </div>
        <p className="text-gray m-y-0">{props.taskTitle}</p>
      </div>
      <h2>{props.number}</h2>
    </div>

    <BaseDivider />

    {/* Stats Footer */}
    <div className="Stats-footer d-flex align-center justify-between">
      <img src={props.littleGraph} alt="Little Graph" />
      <p className="font-2 text-gray m-y-0 text-right">
        <span className="text-light-green">10+</span> more from last
      </p>
    </div>
  </div>
);

function TaskStats() {
  return (
    // Stats Grid
    <div className="Task-stats grid-container">
      <StatItem
        littleGraph={littleGraphGreen}
        taskTitle="Task Completed"
        number="08"
        icon="star"
      />
      <StatItem
        littleGraph={littleGraphOrange}
        taskTitle="New Task"
        number="10"
        icon="note"
      />
      <StatItem
        littleGraph={littleGraphRed}
        taskTitle="Project Done"
        number="12"
        icon="pad"
      />
    </div>
  );
}

export default TaskStats;
