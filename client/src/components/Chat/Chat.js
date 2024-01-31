import React, { useEffect, useState } from "react";
import axios from "axios";
const Chat = () => {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat/");
      console.log(data);
      setChats(data);
    } catch (err) {
      console.log(err);
      console.log("Could Not Fetch Chats");
    }
  };
  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <div className=" text-9xl">
      Chat
      <div>
        {chats.map((chat) => (
          <div key={chat._id} className="text-xl">{chat.chatName}</div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
