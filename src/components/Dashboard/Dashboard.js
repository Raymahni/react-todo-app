import "./Dashboard.css";

// Component Imports
import TaskStats from "./TaskStats/TaskStats";
import TaskLineChart from "./TaskLineChart/TaskLineChart";
import TaskTable from "./TaskTable/TaskTable";

function Dashboard() {
  return (
    <div className="Dashboard-area">
      <TaskStats />
      <TaskLineChart />
      <TaskTable />
    </div>
  );
}

export default Dashboard;
