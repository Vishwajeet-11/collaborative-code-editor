/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import "../index.css";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("created a new Room");
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("All fields are mandatory!!");
      return;
    }
    // redirect
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleInputEnter = (e) => {
    console.log('event', e.code);
    if(e.code === 'Enter'){
      joinRoom()
    }
  } 
  return (
    <div className="HomePageWrapper">
      <div className="FormWrapper">
        <img src="/code-sync.png" alt="code-sync-logo" />
        <h4 className="mainLabel">Paste Invitation ROOM ID</h4>
        <div className="inputGroup">
          <input
            type="text"
            className="inputBox"
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
            value={roomId}
            onKeyUp={handleInputEnter}
          />
          <input
            type="text"
            className="inputBox"
            placeholder="USERNAME"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            onKeyUp={handleInputEnter}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            JOIN
          </button>
          <span className="createInfo">
            If you don't have an invite create &nbsp;{" "}
            <a onClick={createNewRoom} href="#" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          created by{" "}
          <a href="#" className="">
            Vishwajeet
          </a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
