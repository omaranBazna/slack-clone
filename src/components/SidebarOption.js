import React from "react";
import "../styles/sidebarOption.css";
const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  return (
    <div
      className="sidebar-option"
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {Icon && <Icon className="sidebar-option-icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebar-option-channel">
          <span className="sidebar-option-hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
};

export default SidebarOption;
