import React, {Component} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {grey} from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
    divstyle: {
        marginTop: "5px",
        width: "100%",
        height: "30px",
        backgroundColor: "white",
        boxShadow: "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
        borderRadius: "10px"
    },

}));



export default function Utilitybar() {
    const classes = useStyles();
    return (
            <div className={classes.divstyle}>

            </div>
        );

}
