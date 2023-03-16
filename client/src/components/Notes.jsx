import React from "react";
import Note from "./Note";

const Notes = ({ notes }) => {
  return (
    <div className="NotesContainer">
      {notes.map((note, index) => (
        <Note note={note} key={index} />
      ))}
    </div>
  );
};

export default Notes;
