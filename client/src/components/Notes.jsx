import React from "react";
import Note from "./Note";
import NewNote from "./NewNote";

const Notes = ({ notes, handleNewMessage, note, setNote }) => {
  return (
    <div className="NotesContainer">
      {notes.map((note) => (
        <Note note={note} key={note.content} />
      ))}
      <NewNote
        handleNewMessage={handleNewMessage}
        note={note}
        setNote={setNote}
      />
    </div>
  );
};

export default Notes;
