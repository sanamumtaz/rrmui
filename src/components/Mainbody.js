import React from "react";
import { Grid, Paper } from "@material-ui/core";
import WhiteBoard from "./WhiteBoard";
import Video from "./Video";
import File from "./File";
import { connect } from "react-redux";

const style = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 300,
    boxShadow:
        "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
    borderRadius: "10px",
    flexGrow: 1
  }
};

class Mainbody extends React.Component {
  render() {
    return (
      <Grid container spacing={2}>
        {this.props.wbStatus && <WhiteBoard style={style.Paper} />}
        {this.props.vidStatus && <Video style={style.Paper} />}
        {this.props.fileStatus && <File style={style.Paper} />}
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
