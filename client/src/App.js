import React, { useEffect, useState } from "react";
import Notes from "./components/Notes";
import ReactPlayer from "react-player";
import logo from "./logo.png";
import profilePhoto from "./assets/user.png";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");

  const fetchNotes = async () => {
    const notesData = await fetch("http://localhost:3001/getnotes", {
      method: "get",
    });
    const notesJSON = await notesData.json();
    setNotes(notesJSON);
  };

  const handleNewMessage = (e, note) => {
    e.preventDefault();
    if (!note){
      return;
    }
    const newNote = {
      content: note,
      user: {
        name: "Angie Kaluderovic",
        img: profilePhoto,
      }
    }
    notes.push(newNote)
    setNotes(notes);
    setNote("");
    };

  useEffect(() => {
    fetchNotes();
  }, []);
  return (
    <div className="App">
      <div className="MainRow">
        <div className="VideoContainer">
          <div className="VideoCover" />
          <ReactPlayer
            className="ReactPlayer"
            width="100%"
            height="100%"
            url="https://www.youtube.com/watch?v=f1x9lgX8GaE&t=319s"
            playing
            loop
            muted
          />
          <img src={logo} className="AppLogo" alt="logo" />
        </div>
        <Notes notes={notes} handleNewMessage={handleNewMessage} note={note} setNote={setNote}/>
      </div>
    </div>
  );
};

export default App;
