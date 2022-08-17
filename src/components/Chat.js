import React from "react";
import "../styles/Chat.css";
import { useParams } from "react-router-dom";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { db } from "../firebase";
import { collection, onSnapshot, query, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
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
        const collectionRef = collection(docRef, "messages");
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
      }
    }
  }, [roomId]);
  console.log(messages);
  return (
    <div className="chat">
      <h1>you are in room {roomId} </h1>
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
    </div>
  );
};

export default Chat;
