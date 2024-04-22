import React from "react";


import MyNavBar from "./MyNavBar";

class Header extends React.Component {
  render() {
    return (
      <div className="p-2" style={{ background: "var(--dark-purple)" }}>
        <MyNavBar/>
      </div>
    )
  }
}

export default Header;
