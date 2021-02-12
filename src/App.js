import React from "react";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Widgets from "./Components/Widgets"

function App() {
  return (
    <div className="App">
      {/* <h1>Twitter Clone</h1> */}
      <Sidebar />
      <Feed />
      <Widgets/>
    </div>
  );
}

export default App;
