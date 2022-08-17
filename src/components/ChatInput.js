import React from "react";
import "../styles/ChatInput.css";
const ChatInput = ({ channelName, channelId }) => {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chat-input">
      <form>
        <input placeholder={`Message #${channelName}`}></input>
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
