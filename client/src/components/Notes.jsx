import React from "react";
import Note from "./Note";

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
