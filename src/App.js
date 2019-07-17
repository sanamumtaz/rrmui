import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Utilitybar from "./components/Utilitybar";
// import Viewbar from "./components/Viewbar";
// import Drawingtools from "./components/Drawingtools";
import Mainbody from "./components/Mainbody";
import ClassVisuals from "./components/ClassVisuals";
//import Sessionplan from "./components/Sessionplan";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Utilitybar />
        {/* <Viewbar /> */}
        {/* <Drawingtools /> */}
        <Mainbody />
        {/* <Sessionplan /> */}
        <ClassVisuals/>
      </div>
    );
  }
}

export default App;
