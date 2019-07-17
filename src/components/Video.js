import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";

export default class Video extends Component {
  render() {
    return (
      <Grid item style={{flexBasis: "auto"}}>
        <Paper style={{padding: 20,
            marginTop: 10,
            marginBottom: 10,
            boxShadow:
                "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
            borderRadius: "10px",
            flexGrow: 1}}>
          <iframe
            title="Video Embed"
            src="https://www.youtube.com/embed/pc_k-sgUYmY"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen;"
          />
        </Paper>
      </Grid>
    );
  }
}
