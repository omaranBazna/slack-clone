import React from "react";
import "../styles/ChatInput.css";
import { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import { db } from "../firebase";
import { doc, setDoc, collection, serverTimestamp } from "firebase/firestore";

const ChatInput = ({ channelName, channelId }) => {
  const userName = useSelector((state) => state.user.userName);
  const userPhoto = useSelector((state) => state.user.userPhoto);
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (channelId) {
      await setDoc(
        doc(
          collection(doc(collection(db, "rooms"), channelId), "messages"),
          `${Math.floor(Math.random() * 10000000000)}`
        ),
        {
          message: input,
          user: userName,
          userPhoto: userPhoto,
          timestamp: serverTimestamp(new Date(Date.now())),
        }
      );
    }
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
