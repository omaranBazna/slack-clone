import React from "react";
import "../styles/Message.css";
const Message = ({ message, timestamp, user, userImg }) => {
  return (
    <div className="message">
      <img src={userImg} />
      <div className="message-info">
        <h4>{user}</h4>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
