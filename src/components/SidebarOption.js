import React from "react";
import "../styles/sidebarOption.css";
const SidebarOption = ({ Icon, title }) => {
  return (
    <div className="sidebar-option">
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3>
          <span className="sidebar-option-hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
