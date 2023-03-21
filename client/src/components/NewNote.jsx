import React from "react";
import "./NewNote.css";

const NewNote = ({ handleNewMessage, note, setNote }) => {
  return (
    <div className="NewNoteContainer">
      <form
        className="NewNoteForm"
        onSubmit={(e) => {
          handleNewMessage(e, note);
        }}
      >
        <textarea
          className="NewNoteContent"
          placeholder="Write your message"
          onChange={(e) => setNote(e.target.value)}
          value={note}
        />
        <input className="NewNoteButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewNote;
