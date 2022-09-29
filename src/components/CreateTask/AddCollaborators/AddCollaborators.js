import "./AddCollaborators.css";
import React from "react";
import person1 from "../../../assets/images/thumb-1.jpg";

// Icon Imports
import { GrFormClose } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

// Component Imports
import BaseInput from "../../base/BaseInput/BaseInput";

const { useState } = React;

// Function to generate random rgba colors for the collaborator items
function getRandomColor() {
  let x = Math.floor(Math.random() * 256);
  let y = Math.floor(Math.random() * 256);
  let z = Math.floor(Math.random() * 256);
  return `rgba(${x}, ${y}, ${z}, 0.2)`;
}

// Function to add new collaborator
const AddNewCollaborator = ({ toggleAddForm }) => {
  // Setting the initial states of the collaborator name
  const [collaboratorName, setCollaboratorName] = useState("");

  // getting the list of already existing collaborators from the local storage and setting the initial state
  const [collaboratorsList, setCollaboratorsList] = useState([
    ...JSON.parse(localStorage.getItem("collaborators")),
  ]);

  function createCollaborator() {
    // Checking to see if the collaborator name has been entered
    if (collaboratorName) {
      // Pushing the new collaborator into the list of collaborators
      collaboratorsList.push(collaboratorName);
      setCollaboratorsList(collaboratorsList);
    } else {
      // Error alert thrown if collaborator name was not entered
      alert("Please enter collaborator name");
    }

    // Setting the updated list of collaborators back into local storage
    localStorage.setItem(
      "collaborators",
      JSON.stringify([...collaboratorsList])
    );
    toggleAddForm();
    window.location.reload(false);
  }

  return (
    <div className="Add-new-collaborator d-flex">
      {/* Collaborator input field */}
      <BaseInput
        hideTitle
        noMarginBottom
        placeholder="Enter name"
        customWidth="w-50"
        emitInput={(input) => setCollaboratorName(input)}
      />

      <button
        className="Submit-button text-center"
        onClick={createCollaborator}
      >
        <FiChevronRight />
      </button>
    </div>
  );
};

// Collaborators List
const CollaboratorsList = ({ toggleAddForm }) => {
  const collaboratorsList = JSON.parse(localStorage.getItem("collaborators"));

  function CollaboratorsListItem(props) {
    return (
      <div
        className="List-item d-flex align-center"
        style={{ background: getRandomColor() }}
      >
        <img src={person1} alt="Person 1" className="m-r-1" />
        <p className="font-1 m-r-1 m-y-0">{props.value}</p>
        <GrFormClose />
      </div>
    );
  }

  return (
    <div className="Collaborators-list d-flex">
      <div className="Collaborators-list-items d-flex">
        {/* List of Collaborators iteration */}
        {collaboratorsList.map((item, index) => {
          return <CollaboratorsListItem value={item} key={index} />;
        })}
      </div>
      <button className="Add-button" onClick={() => toggleAddForm()}>
        <AiOutlinePlus />
      </button>
    </div>
  );
};

function AddCollaborators() {
  // Setting the initial state of showAddForm
  const [showAddForm, setShowAddForm] = useState(false);

  // Function to toggle the state of showAddForm
  function toggleAddForm() {
    setShowAddForm(!showAddForm);
  }

  return (
    <div className="Add-collaborators">
      <p className="Title">Add Collaborators</p>

      {/* Toggling between the add collaborator form and the list of collaborators based on the showAddForm state */}
      {showAddForm ? (
        <AddNewCollaborator toggleAddForm={toggleAddForm} />
      ) : (
        <CollaboratorsList toggleAddForm={toggleAddForm} />
      )}
    </div>
  );
}

export default AddCollaborators;
