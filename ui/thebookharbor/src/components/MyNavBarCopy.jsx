import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import AvatarDrawer from "./AvatarDrawer";
import "../styles/NavBar.css";

class MyNavBarCopy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      right: false,// state for controlling the right drawer
    };
  }

  toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    this.setState({ [anchor]: open });
  };

    render(){
            
        return(
          <Navbar>
          <React.Fragment key={"right"}>
          <AvatarDrawer
            className="profileIcon">
            H
          </AvatarDrawer>
          </React.Fragment>
        </Navbar>
        );
    }
}

export default MyNavBarCopy;