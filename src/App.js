// Style Imports
import "./App.css";

// Component Imports
import Header from "./components/shared/Header/Header";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import CreateTask from "./components/CreateTask/CreateTask";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  // This is needed for initial load of the app, checking to see if tasks and collaborators has been set into local storage and sets an empty array for them if not
  if (!JSON.parse(localStorage.getItem("tasks"))) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  if (!JSON.parse(localStorage.getItem("collaborators"))) {
    localStorage.setItem("collaborators", JSON.stringify([]));
  }

  return (
    <div className="App">
      <Sidebar />
      <div className="Content-area">
        <Header />

        {/* Main Content Area */}
        <div className="d-flex w-100">
          <Dashboard />
          <CreateTask />
        </div>
      </div>
    </div>
  );
}

export default App;
