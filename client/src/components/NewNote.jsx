import React, { useState } from "react";

const NewNote = ({ handleNewMessage }) => {
  const [message, setMessage] = useState("");
  console.log("message: ", message);
  return (
    <div className="NewNoteContainer">
      <form className="NewNoteForm" onSubmit={() => handleNewMessage(message)}>
        <textarea
          className="NewNoteContent"
          placeholder="Write your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <input className="NewNoteButton" type="submit" value="Send" />
      </form>
    </div>
  );
};

export default NewNote;
