import React from "react";
import "../styles/sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h2>Omaran Server</h2>
          <h3>
            <FiberManualRecordIcon />
            Omaran Bazna
          </h3>{" "}
        </div>
        <CreateIcon />
      </div>
    </div>
  );
};

export default Sidebar;