import "./CreateTask.css";
import React from "react";
import emojis from "../../assets/images/emojis.png";

// Icon Imports
import { GrAppsRounded, GrCalendar } from "react-icons/gr";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

// Component Imports
import BaseInput from "../base/BaseInput/BaseInput";
import BaseDatePicker from "../base/BaseDatePicker/BaseDatePicker";
import BaseButton from "../base/BaseButton/BaseButton";
import BaseDivider from "../base/BaseDivider/BaseDivider";
import Messages from "../shared/Messages/Messages";
import AddCollaborators from "./AddCollaborators/AddCollaborators";

const { useState } = React;

const CreateTask = () => {
  // Setting the initial states of the task form inputs
  const [title, setTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [hours, setHours] = useState("");

  // getting the list of already existing tasks from the local storage and setting the initial state
  const [taskList, setTasks] = useState([
    ...JSON.parse(localStorage.getItem("tasks")),
  ]);

  // Function to create a task / store in local storage
  function submitCreateTask() {
    // Checking to see if all fields have been filled
    if (title && startDate && endDate && hours) {
      // Pushing the new task into the list of tasks
      taskList.push({ title, startDate, endDate, hours });
      setTasks(taskList);
    } else {
      // error Alert thrown if form is not filled properly
      alert("Please fill form properly");
    }

    // Setting the updated list of tasks back into local storage
    localStorage.setItem("tasks", JSON.stringify([...taskList]));
    window.location.reload(false);
  }

  return (
    <div className="Create-task-area">
      {/* Main Title */}
      <div className="Main-title-area d-flex align-center justify-between m-b-6">
        <h3 className="text-green">Today's Schedule</h3>
        <div className="Title-toggle d-flex justify-between">
          <GrAppsRounded className="lighter" />
          <GrCalendar />
        </div>
      </div>

      {/* Create Task Form Area */}
      <div className="Create-task-form">
        <h3 className="text-green m-b-5">New Task</h3>

        <BaseInput
          title="Task Title"
          placeholder="Create new"
          emitInput={(input) => setTitle(input)}
        />

        {/* Smiley Select */}
        <div className="Emoji-list d-flex align-center">
          <FiChevronLeft />
          <img src={emojis} alt="Emojis" />
          <FiChevronRight />
        </div>

        <BaseDivider />
        <AddCollaborators />
        <BaseDivider />

        <BaseDatePicker
          title="Time To Complete"
          emitInput={(input) => setStartDate(input)}
        />
        <BaseDatePicker
          title="End Date"
          emitInput={(input) => setEndDate(input)}
        />

        <BaseDivider />

        <BaseInput
          title="Hours Budgeted"
          placeholder="Enter Hours"
          emitInput={(input) => setHours(input)}
        />
        <BaseButton
          type="button"
          title="Save"
          extraClass="text-right"
          buttonClicked={submitCreateTask}
        />

        <BaseDivider />

        {/* Messages Area */}
        <Messages />
      </div>
    </div>
  );
};

export default CreateTask;
