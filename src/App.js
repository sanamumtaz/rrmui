import React, {Component} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Utilitybar from "./components/Utilitybar";
import Viewbar from "./components/Viewbar";
import Drawingtools from "./components/Drawingtools";
import Mainbody from "./components/Mainbody";
import Sessionplan from "./components/Sessionplan";

class App extends Component {
  render() {
    return (
        <div>
            <Navbar/>
            <Utilitybar/>
            <Viewbar/>
            <Drawingtools/>
            <Mainbody/>
            <Sessionplan/>
        </div>
    );
  }

}

export default App;
