import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

export default class Video extends Component {
  render() {
    return (
      <Grid item md sm={12} xs={12}>
        <Paper style={this.props.style}>
          <iframe
            title="Video Embed"
            src="https://www.youtube.com/embed/pc_k-sgUYmY"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            height="100%"
            width="100%"
          />
        </Paper>
      </Grid>
    );
  }
}
