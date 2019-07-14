import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Utilitybar from "./components/Utilitybar";
import Viewbar from "./components/Viewbar";
import MainB from "./components/MainB";

const App = () => (
    <div>
        <Navbar/>
        <Utilitybar/>
        <Viewbar/>
        <div>
            <MainB/>
        </div>
    </div>
);

export default App;
