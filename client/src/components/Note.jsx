import React from "react";

const Note = ({ note }) => {
  return (
    <div className="NoteWrapper">
      <div className="NoteContainer">
        <div>
          <img className="UserImage" src={note.user.img} />
        </div>
        <div className="NoteDetails">
          <div className="NameAndTime">
            <div className="UserName">{note.user.name}</div>
            <div className="TimeStamp">· 12:45</div>
          </div>
          <div className="NoteContent">{note.content}</div>
        </div>
      </div>
    </div>
  );
};

export default Note;
