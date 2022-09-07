import React from "react";
import "./App.css";
import Electronics from "./components/classComponents/classComponet";

function App() {
  return (
    // <div className="App">
    //   <Electronics />
    // </div>
    React.createElement("div", { className: "App" }, <Electronics />)
  );
}

export default App;
