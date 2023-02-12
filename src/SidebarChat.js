import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./SidebarChat.css";
const SidebarChat = ({ addNewChat }) => {
  const [chester, setChester] = useState("");
  useEffect(() => {
    setChester(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const roomName = prompt("Enter room name for Chat");
    if (roomName) {
      //Database Stuff
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar
        src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${chester}`}
      />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last Message</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>add New Chat</h2>
    </div>
  );
};

export default SidebarChat;
