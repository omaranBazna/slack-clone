import React from "react";
import "../styles/sidebar.css";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AppsIcon from "@mui/icons-material/Apps";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useSelector } from "react-redux/es/exports";

const Sidebar = () => {
  const [channels, setChannels] = useState([]);

  const name = useSelector((state) => state.user.userName);

  const snapshot_callback = (snapshot) => {
    setChannels(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        name: doc.data().name,
      }))
    );
  };

  useEffect(() => {
    const q = collection(db, "rooms");
    const unsubscribe = onSnapshot(q, snapshot_callback);
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-info">
          <h3>
            <FiberManualRecordIcon />
            {name}
          </h3>{" "}
        </div>
        <CreateIcon />
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads" />
      <SidebarOption Icon={InboxIcon} title="Mentions & reactions" />
      <SidebarOption Icon={DraftsIcon} title="Saved items" />
      <SidebarOption Icon={BookmarkIcon} title="Channel browser" />
      <SidebarOption Icon={PeopleAltIcon} title="People & user groups" />
      <SidebarOption Icon={AppsIcon} title="Apps" />
      <hr />
      <SidebarOption Icon={FileCopyIcon} title="File browser" />
      <SidebarOption Icon={ExpandLessIcon} title="Show less" />
      <hr />
      <SidebarOption Icon={ExpandMoreIcon} title="Channels" />
      <hr />
      <SidebarOption Icon={AddIcon} title="add Channels" addChannelOption />
      {channels.map((channel) => (
        <SidebarOption
          title={channel.name}
          id={channel.id}
          key={channel.id}
        ></SidebarOption>
      ))}
    </div>
  );
};

export default Sidebar;
