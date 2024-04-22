import React from "react";
import { Navbar, NavDropdown } from "react-bootstrap";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import AvatarDrawer from "./AvatarDrawer";
import logo from "../assets/logo.png";
import "../styles/NavBar.css";

class MyNavBar extends React.Component {
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
            <img src={logo} style={{ width: '10%', height: '10%' }} alt="logo" className="px-4"></img>
            <Link className="navbar-brand" to='/'>The Book Harbor</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Borrow</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Trade</a>
                </li>

                <li className="nav-item dropdown">
                  <NavDropdown
                    id="nav-dropdown-dark-example"
                    title="Genre">
                    <a className="dropdown-item" href="#">History</a>
                    <a className="dropdown-item" href="#">Non-Fiction</a>
                    <a className="dropdown-item" href="#">Academic books</a>
                    <a className="dropdown-item" href="#">Classics</a>
                    <div className="dropdown-divider"></div>
                  </NavDropdown>
                </li>
              </ul>
               <React.Fragment key={"right"}>
            <AvatarDrawer
              className="profileIcon"
            >
              H
            </AvatarDrawer>
            
            
          </React.Fragment>
              
            </div>
          </Navbar>

        );
    }
}

export default MyNavBar;