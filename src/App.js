import React, {Component} from "react";
import Navbar from "./components/Navbar";
import Utilitybar from "./components/Utilitybar";
// import Viewbar from "./components/Viewbar";
// import Drawingtools from "./components/Drawingtools";
import Mainbody from "./components/Mainbody";
//import Sessionplan from "./components/Sessionplan";
import {Widget} from "react-chat-widget";
import "react-chat-widget/lib/styles.css";
import ClassVisuals from "./components/ClassVisuals";

class App extends Component {
    render() {
        return (
            <div style={{background: "#ffedd1"}}>
                <Navbar/>
                <Utilitybar/>
                <Widget/>
                {/* <Viewbar /> */}
                {/* <Drawingtools /> */}
                <Mainbody/>
                {/* <Sessionplan /> */}
                <ClassVisuals/>
            </div>

        );
    }
}

export default App;
