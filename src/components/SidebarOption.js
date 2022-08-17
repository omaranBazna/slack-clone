import React from "react";
import "../styles/sidebarOption.css";
const SidebarOption = ({ Icon, title }) => {
  return <div>{Icon && <Icon className="sidebar-option-icon" />}</div>;
};

export default SidebarOption;
