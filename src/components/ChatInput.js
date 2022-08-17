import React from "react";
import "../styles/ChatInput.css";
import { useState } from "react";
const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
  };
  return (
    <div className="chat-input">
      <form>
        <input
          placeholder={`Message #${channelName}`}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        ></input>
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
