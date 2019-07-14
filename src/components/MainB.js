import React from "react";
import {connect} from "react-redux";

const createClass = require('create-react-class');

const MainB = createClass({
    //when double screen not enabled
    renderNormal: function(){
        return (
            <div style={{marginTop: "5px",
                height: "400px",
                backgroundColor: "white",
                boxShadow: "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                borderRadius: "10px",
                gridColumnEnd: 'span 12'}}/>
        );
    },
    //when double screen is enabled
    renderDoubleScreen: function() {
        return (
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)'}}>
                <div style={{marginTop: "5px",
                    height: "400px",
                    backgroundColor: "white",
                    boxShadow: "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                    borderRadius: "10px",
                    gridColumnEnd: 'span 6'}}/>
                <div style={{marginTop: "5px",
                    height: "400px",
                    backgroundColor: "white",
                    boxShadow: "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
                    borderRadius: "10px",
                    gridColumnEnd: 'span 6'}}/>
            </div>
        );
    },
    render: function () {
        if (this.props.dsc) {
            return this.renderDoubleScreen();
        } else {
            return this.renderNormal();
        }
    }
});

// Get apps state and pass it as props to MainB
// whenever state changes, the MainB will automatically re-render
function mapStateToProps(state) {
    return{
        dsc: state.doublescreen
    };
}

// MainB is now aware of state
export default connect(mapStateToProps)(MainB);