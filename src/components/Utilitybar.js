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
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";


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

    constructor(props) {
        super(props);
        this.onButtonClicked = this.onButtonClicked.bind(this)
        this.state = { currentButton: null }
    }

    onButtonClicked (id) {
        this.setState({ currentButton: this.state.currentButton === id ? null : id })
    }

    state = {
        anchorEl: null,
        mobileMoreAnchorEl: null,
    };

    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };

    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };

    render() {
        const {mobileMoreAnchorEl } = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        const renderMobileMenu = (
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <IconButton>
                        <FaChromecast/>
                    </IconButton>
                </MenuItem>
                <MenuItem onClick={this.handleMobileMenuClose}>
                    <IconButton>
                        <FaMicrophone/>
                    </IconButton>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton>
                        <FaRocketchat/>
                    </IconButton>
                </MenuItem>
                <MenuItem>
                    <IconButton>
                        <MdSurroundSound/>
                    </IconButton>
                </MenuItem>
                <MenuItem>
                    <IconButton>
                        <FaRegFolderOpen/>
                    </IconButton>
                </MenuItem>
                <MenuItem>
                    <IconButton>
                        <FaHandPaper/>
                    </IconButton>
                </MenuItem>
            </Menu>
        );
        return (
            <div style={this.style}>
                <Tooltip title="Whiteboard" placement="bottom">
                    <IconButton color={this.props.wbStatus ? "primary" : "default" }
                                onClick={() => {
                                    this.props.wbToggle();
                                }}>
                        <FaChalkboard/>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Video" placement="bottom">
                    <IconButton color={this.props.vidStatus ? "primary" : "default" }
                                onClick={() => {
                                    this.props.vidToggle();
                                }}>
                        <FaPlayCircle/>
                    </IconButton>
                </Tooltip>

                <Tooltip title="Document" placement="bottom">
                    <IconButton color={this.props.fileStatus ? "primary" : "default" }
                                onClick={() => {
                                    this.props.fileToggle();
                                }}>
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
                <Hidden only={["sm", "md", "lg"]}>
                    <IconButton
                        aria-label="Show more"
                        aria-haspopup="true"
                        color="inherit"
                        onClick= {this.handleMobileMenuOpen}
                    >
                        <MoreIcon/>
                    </IconButton>
                </Hidden>
                {renderMobileMenu}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {wbStatus: state.wbStatus, vidStatus: state.vidStatus,
        fileStatus: state.fileStatus};
};

export default connect(
    mapStateToProps,
    {wbToggle: wbToggle, vidToggle: vidToggle, fileToggle: fileToggle}
)(Utilitybar);
