import React from "react";
import { Hidden } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

class ClassVisuals extends React.Component {
  style = {
    padding: "0px 10px 10px 10px",
    boxShadow:
      "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
    borderRadius: "10px",
    display: "inline-block"
  };

  card = {
    marginLeft: "5px",
    flexBasis: "auto",
    boxShadow:
      "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
    float: "left"
  };

  render() {
    return (
      <div>
        <Hidden only="xs">
          <div style={this.style}>
            <Typography variant="body2">
              <b style={{ color: "orange" }}>Class Visuals</b>
            </Typography>
            <Card style={this.card}>
              <CardContent>Teacher</CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">
                  Expand
                </Button>
              </CardActions>
            </Card>
            <Card style={this.card}>
              <CardContent>Class 1</CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">
                  Expand
                </Button>
              </CardActions>
            </Card>
            <Card style={this.card}>
              <CardContent>Class 2</CardContent>
              <CardActions>
                <Button variant="outlined" color="primary">
                  Expand
                </Button>
              </CardActions>
            </Card>
          </div>
        </Hidden>
        <Hidden only={["sm", "md", "lg"]}>
          <Button
            variant="contained"
            style={{ backgroundColor: "orange", color: "white" }}
          >
            Class Visuals
          </Button>
        </Hidden>
      </div>
    );
  }
}

export default ClassVisuals;
