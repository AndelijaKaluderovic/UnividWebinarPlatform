import React from "react";

const Note = ({ note }) => {
  console.log("note: ", note);
  return (
    <div className="NotesContainerSection">
      <div className="User">
        <img className="UserImage" src={note.user.img} />
        <div className="UserName">{note.user.name}</div>
      </div>
      <div className="Content">{note.content}</div>
    </div>
  );
};

export default Note;
