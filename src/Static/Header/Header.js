import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar"
import Avatar from "@material-ui/core/Avatar";

import '../style.less';

const Header = (props) => {
  const { authorized, name, photo } = props;
  return(
    <AppBar position="sticky" color="default">
      <ToolBar>
        {
          authorized ? (
            <div className="linearWrapper">
              <Typography variant="h6" noWrap>
                {`Hello, ${name}` || null}
              </Typography>
              <Link to="/map" className="linkButton"><Button variant="contained" color="primary" disableElevation>Map</Button></Link>
              <Link to="/about" className="linkButton"><Button variant="contained" color="primary" disableElevation>About</Button></Link>
              <div className="right">
                <Avatar alt="Name" src={photo || null}/>
              </div>
            </div>
          ) : (
            <Typography variant="h6" noWrap>
              Map
            </Typography>
          )
        }
      </ToolBar>
    </AppBar>
  )
};

export default connect(store => ({
  authorized: store.authorized,
  name: null || store.user.name,
  photo: store.user.photo || null,
}))(Header);