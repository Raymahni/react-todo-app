import React, { useEffect } from "react";
// Style Imports
import "./App.css";

// Component Imports
import Header from "./components/shared/Header/Header";
import Sidebar from "./components/shared/Sidebar/Sidebar";
import CreateTask from "./components/CreateTask/CreateTask";
import Dashboard from "./components/Dashboard/Dashboard";
import { WalletChatWidget } from "react-wallet-chat-v0";
import "react-wallet-chat-v0/dist/index.css";

const { useState } = React;

function App() {
  // This is needed for initial load of the app, checking to see if tasks and collaborators has been set into local storage and sets an empty array for them if not
  if (!JSON.parse(localStorage.getItem("tasks"))) {
    localStorage.setItem("tasks", JSON.stringify([]));
  }

  if (!JSON.parse(localStorage.getItem("collaborators"))) {
    localStorage.setItem("collaborators", JSON.stringify([]));
  }

  const [widgetState, setWidgetState] = useState({});

  // Usinf Functional update approach
  useEffect(() => {
    setWidgetState((w) => {
      return {
        ...w,
        chatAddr: "0x17FA0A61bf1719D12C08c61F211A063a58267A19",
        isOpen: true,
      };
    });
  }, [setWidgetState]);

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
      <WalletChatWidget widgetState={widgetState} />
    </div>
  );
}

export default App;
