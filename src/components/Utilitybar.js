import React, {Component} from 'react';
import Button from "@material-ui/core/Button";
import {selectDoubleScreen} from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class Utilitybar extends Component {

    render () {
        return (
            <div style={{marginTop: "5px",
                width: "100%",
                height: "30px",
                backgroundColor: "white",
                boxShadow: "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
                borderRadius: "10px"}}>

                <Button key="qq" onClick= {() => this.props.selectDoubleScreen(this.props.dsc)} color="primary" aria-label="Add to shopping cart">
                    <img src={require('../doubleScreen.png')} height="12px" width="15px" alt="icon"/>
                </Button>

            </div>
        );
    }

}

// Get apps state and pass it as props to Utilitybar
function mapStateToProps(state) {
    return {
        dsc: state.doublescreen
    };
}

// Get actions and pass them as props to to Utilitybar
// now UserList has this.props.selectDoubleScreen
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectDoubleScreen: selectDoubleScreen}, dispatch);
}

// Utilitybar is now aware of state and actions
export default connect(mapStateToProps, matchDispatchToProps)(Utilitybar);