import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

export default class WhiteBoard extends Component {
  render() {
    return (
      <Grid item style={{flexGrow:1}} md sm xs={12}>
        <Paper style={this.props.style}>White Board</Paper>
      </Grid>
    );
  }
}
