import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import Message from "./Message";
import ChatInput from "./ChatInput";
const Chat = () => {
  const { roomId } = useParams();
  const [name, setName] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const docRef = doc(db, "rooms", roomId);
    const getDocF = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);

        return true;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        return false;
      }
    };

    if (roomId) {
      if (getDocF()) {
        ///bring the messages
        const collectionRef = query(
          collection(docRef, "messages"),
          orderBy("timestamp")
        );
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => {
              return { id: doc.id, data: doc.data() };
            })
          );
        });
      }
    }
  }, [roomId]);
  console.log(messages);
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="chat-header-left">
          <h4 className="chat-channel-name">
            <strong>#{name}</strong>
            <StarBorderOutlinedIcon />
          </h4>
        </div>
        <div className="chat-header-right">
          <p>
            <InfoOutlinedIcon /> Details
          </p>
        </div>
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <Message
              key={message.id}
              message={message.data.message}
              user={message.data.user}
              userPhoto={message.data.userPhoto}
              timestamp={message.data.timestamp}
            />
          );
        })}
      </div>
      <ChatInput channelName={name} channelId={roomId} />
    </div>
  );
};

export default Chat;
