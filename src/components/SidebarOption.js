import React from "react";
import "../styles/sidebarOption.css";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, doc, setDoc } from "firebase/firestore";
const SidebarOption = ({ Icon, title, id, addChannelOption }) => {
  const navigator = useNavigate();

  const selectChannel = () => {
    if (id) {
      navigator(`../rooms/${id}`, { replace: true });
    }
  };
  const addChannel = async () => {
    const channelName = prompt("please enter the channel name");
    if (channelName) {
      await setDoc(doc(db, "rooms", `${Math.floor(Math.random() * 1000000)}`), {
        name: channelName,
      });
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
