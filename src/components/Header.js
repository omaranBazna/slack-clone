import React from "react";

import { Avatar } from "@material-ui/core";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <Avatar className="header-avatar" alt={"omaran bazna"} src={""} />
        <AccessTimeFilledOutlinedIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
      </div>
      <div className="header-right">
        <HelpCenterOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
