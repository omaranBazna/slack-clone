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

  useEffect(() => {
    const docRef = doc(db, "rooms", roomId);
    const getDocF = async () => {
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setName(docSnap.data().name);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    if (roomId) {
      getDocF();
    }
  }, [roomId]);

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
