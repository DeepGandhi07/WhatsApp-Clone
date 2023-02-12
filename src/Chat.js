import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Chat.css";
const Chat = () => {
  const [chester, setChester] = useState("");
  useEffect(() => {
    setChester(Math.floor(Math.random() * 5000));
  }, []);
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${chester}`}
        />
      </div>
      <div className="chat__body"></div>
      <div className="chat__footer"></div>
    </div>
  );
};

export default Chat;
