import React from "react";
import "../styles/Message.css";
const Message = ({ message, timestamp, user, userPhoto }) => {
  return (
    <div className="message">
      {message && (
        <>
          <img src={userPhoto} />
          <div className="message-info">
            <h4>
              {user}{" "}
              <span className="message-timestamp">
                {new Date(timestamp?.toDate()).toUTCString()}
              </span>
            </h4>
            <p> message</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
