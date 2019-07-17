import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

export default class Video extends Component {
  render() {
    return (
      <Grid item style={{flexGrow:1}}>
        <Paper style={this.props.style}>File Viewer</Paper>
      </Grid>
    );
  }
}
