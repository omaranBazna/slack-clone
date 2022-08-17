import React from "react";
import "../styles/ChatInput.css";
const ChatInput = () => {
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chat-input">
      <form>
        <input></input>
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
