import React from "react";
import "./App.css";
import { LogedIn } from "./components/state/LogedIn";
import { User } from "./components/state/User";
function App() {
  return (
    <div className="App">
      <LogedIn />
      <User />
    </div>
  );
}

export default App;
