import React from "react";

import { Avatar } from "@material-ui/core";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Avatar className="header-avatar" alt={"omaran bazna"} src={""} />
      </div>
      <div className="header-search"></div>
      <div className="header-right"></div>
    </div>
  );
};

export default Header;
