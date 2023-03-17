import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";

const Notes = ({ notes, handleNewMessage }) => {
  return (
    <div className="NotesContainer">
      {notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}
      <NewNote handleNewMessage={handleNewMessage} />
    </div>
  );
};

export default Notes;
