import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
const Chat = () => {
  const { roomId } = useParams();

  return (
    <div className="chat">
      <h1>you are in room {roomId} </h1>
    </div>
  );
};

export default Chat;
