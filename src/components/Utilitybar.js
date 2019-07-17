import React from "react";
import {connect} from "react-redux";
import {wbToggle, vidToggle, fileToggle} from "../actions";
import {
    FaChalkboard,
    FaRegFileAlt,
    FaChromecast,
    FaPlayCircle,
    FaMicrophone,
    FaRocketchat,
    FaRegFolderOpen,
    FaHandPaper
} from "react-icons/fa";

import {MdSurroundSound} from "react-icons/md";
import Hidden from "@material-ui/core/Hidden";
import MoreIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

class Utilitybar extends React.Component {
    style = {
        marginTop: "5px",
        width: "100%",
        height: "45px",
        backgroundColor: "white",
        boxShadow:
            "0px 2px 4px -1px rgba(224,224,224 ,1), 0px 4px 5px 0px rgba(224,224,224 ,1), 0px 1px 10px 0px rgba(224,224,224 ,1)",
        borderRadius: "10px"
    };

    render() {
        return (
            <div style={this.style}>
                <Tooltip title="Whiteboard" placement="bottom">
                    <IconButton onClick={() => this.props.wbToggle()}>
                        <FaChalkboard/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Video" placement="bottom">
                    <IconButton onClick={() => this.props.vidToggle()}>
                        <FaPlayCircle/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Document" placement="bottom">
                    <IconButton onClick={() => this.props.fileToggle()}>
                        <FaRegFileAlt/>
                    </IconButton>
                </Tooltip>
                <Hidden only="xs">
                    <IconButton>
                        <FaChromecast/>
                    </IconButton>
                    <IconButton>
                        <FaMicrophone/>
                    </IconButton>
                    <IconButton>
                        <FaRocketchat/>
                    </IconButton>
                    <IconButton>
                        <MdSurroundSound/>
                    </IconButton>
                    <IconButton>
                        <FaRegFolderOpen/>
                    </IconButton>
                    <IconButton>
                        <FaHandPaper/>
                    </IconButton>
                </Hidden>
                <Hidden only={['sm', 'md', 'lg']}>
                    <IconButton
                        aria-label="Show more"
                        aria-haspopup="true"
                        color="inherit"
                    >
                        <MoreIcon/>
                    </IconButton>
                </Hidden>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {wbStatus: state.wbStatus, vidStatus: state.wbStatus};
};

export default connect(
    mapStateToProps,
    {wbToggle: wbToggle, vidToggle: vidToggle, fileToggle: fileToggle}
)(Utilitybar);
