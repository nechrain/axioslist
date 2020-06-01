import React from "react";
import "./App.css";
import Checklist  from "./components/checklist"
import Addtolist from  "./components/addtolist"

function App() {

  
  return (
    <div className="container">
      <Addtolist />
      <Checklist/>
    </div>
  );
}

export default App;
