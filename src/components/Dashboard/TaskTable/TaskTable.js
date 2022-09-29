import "./TaskTable.css";

// Component Imports
import ActionDropdown from "../../shared/ActionDropdown/ActionDropdown";
import TableFilterDropdown from "../../shared/TableFilterDropdown/TableFilterDropdown";

function TaskTable() {
  // Getting the already existing list of tasks from local storage
  const taskList = JSON.parse(localStorage.getItem("tasks"));

  // Single Task component
  function SingleTask(props) {
    return (
      <tr>
        <td>{props.task.title}</td>
        <td>{props.task.startDate}</td>
        <td>{props.task.endDate}</td>
        <td>{props.task.hours}</td>
        <td>
          <p className="font-1 text-lighter-green m-y-0">60% Complete</p>
          <div className="Table-progress-bar">
            <div className="Table-progress-bar-loaded"></div>
          </div>
        </td>
        <td>
          {/* Action dropdown component */}
          <ActionDropdown />
        </td>
      </tr>
    );
  }

  return (
    <div className="Task-table-card">
      <div className="Task-table-header d-flex justify-between align-center m-b-4">
        <h2 className="text-green">Task</h2>
        <div className="Task-table-filter d-flex">
          {/* Table filter dropdown component */}
          <TableFilterDropdown />
        </div>
      </div>

      <div className="Task-table">
        <table>
          <thead>
            <tr>
              <th>Name Of Task</th>
              <th>Start Date</th>
              <th>End date</th>
              <th>Hours</th>
              <th>Progress</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* Table rows / List of tasks iteration */}
            {taskList.map((item, index) => {
              return <SingleTask task={item} key={index} />;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TaskTable;
