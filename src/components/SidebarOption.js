import React from "react";
import "../styles/sidebarOption.css";
import { useNavigate } from "react-router-dom";
const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigator = useNavigate();

  const selectChannel = () => {
    if (id) {
    }
  };
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
