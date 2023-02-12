import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmotionIcon from "@material-ui/icons/EmojiEmotions";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import React, { useEffect, useState } from "react";
import "./Chat.css";
const Chat = () => {
  const [input, setInput] = useState("");
  const [chester, setChester] = useState("");
  useEffect(() => {
    setChester(Math.floor(Math.random() * 5000));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("You typed >>>", input);
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://api.dicebear.com/5.x/adventurer/svg?seed=${chester}`}
        />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last Seen at ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className={`chat__message ${true && "chat__receiver"}`}>
          <span className="chat__name">Deep Gandhi</span>
          Hey Guys
          <span className="chat__timestamp">10:00 pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmotionIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a Message"
          />
          <button onClick={sendMessage}>
            <SendIcon />
          </button>

          {/* <SendIcon /> */}
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
