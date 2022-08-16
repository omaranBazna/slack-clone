import React from "react";
import "../styles/sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Omaran Server</h2>
        <h3>
          <FiberManualRecordIcon />
          Omaran Bazna
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
