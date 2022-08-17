import React from "react";

import { Avatar } from "@material-ui/core";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";
import SearchIcon from "@mui/icons-material/Search";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import "../styles/Header.css";
import { useSelector } from "react-redux/es/exports";
const Header = () => {
  const photo = useSelector((state) => state.user.userPhoto);
  const name = useSelector((state) => state.user.userName);
  return (
    <div className="header">
      <div className="header-left">
        <Avatar className="header-avatar" alt={name} src={photo ? photo : ""} />
        <AccessTimeFilledOutlinedIcon />
      </div>
      <div className="header-search">
        <SearchIcon />
        <input type="text" placeholder="search for channels" />
      </div>
      <div className="header-right">
        <HelpCenterOutlinedIcon />
      </div>
    </div>
  );
};

export default Header;
