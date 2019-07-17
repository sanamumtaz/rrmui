import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    divstyle: {
        display: 'inline-block',
        marginTop: "5px",
        width: "25px",
        height: "400px",
        backgroundColor: "white",
        boxShadow: "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)",
        borderRadius: "10px",
    },

}));


export default function Sessionplan() {
    const classes = useStyles();
    return (
        <div className={classes.divstyle}>

        </div>
    );

}