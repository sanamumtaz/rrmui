import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

export default class Video extends Component {
  render() {
    return (
      <Grid item md sm={12} xs={12}>
        <Paper style={this.props.style}>File Viewer</Paper>
      </Grid>
    );
  }
}
