import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
const Chat = () => {
  const { roomId } = useParams();

  return (
    <div className="chat">
      <h1>you are in room {roomId} </h1>
      <div className="chat-header">
        <div className="chat-header-left">
          <h4 className="chat-channel-name">
            <strong>#{general}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat-header-right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
