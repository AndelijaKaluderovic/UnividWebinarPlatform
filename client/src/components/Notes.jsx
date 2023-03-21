import React from "react";
import Note from "./Note";
import "./Notes.css";

const Notes = ({ notes }) => {
  return (
    <div className="Notes">
      {notes.map((note) => (
        <Note note={note} key={note.content} />
      ))}
    </div>
  );
};

export default Notes;
