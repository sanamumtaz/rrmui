import React from "react";
import { Grid } from "@material-ui/core";
import WhiteBoard from "./WhiteBoard";
import Video from "./Video";
import File from "./File";
import { connect } from "react-redux";

const style = {
  root: {},
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    border: "1px solid lightBlue"
  }
};

class Mainbody extends React.Component {
  render() {
    return (
      <Grid container spacing={2} style={style.root}>
        {this.props.wbStatus && <WhiteBoard style={style.Paper} />}
        {this.props.vidStatus && <Video style={style.Paper} />}
        {this.props.fileStatus && <File style={style.Paper} />}
        {/* <Grid item xs={12}>
          <Paper>xs=12</Paper>
        </Grid> */}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    wbStatus: state.wbStatus,
    vidStatus: state.vidStatus,
    fileStatus: state.fileStatus
  };
};

export default connect(mapStateToProps)(Mainbody);
