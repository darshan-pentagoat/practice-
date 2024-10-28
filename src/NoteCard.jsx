import React, { useState } from "react";

const NoteCard = ({ note, handleDelete, editCard }) => {
  // const handleTitleChange = (e) => {
  //   editCard(note.id, { title: e.target.value });
  // };

  const toggleEdit = () => {
    editCard(note.id, { isEditing: !note.isEditing });
  };

  return (
    <div style={{ margin: "10px 0" }}>
      {/* <input
        type="text"
        disabled={!note.isEditing}
        onChange={handleTitleChange}
        value={note.title || ""}
        placeholder="Title"
      /> */}
      <input
        type="text"
        disabled={!note.isEditing}
        onChange={(e) => editCard(note.id, { title: e.target.value })}
        value={note.title}
        placeholder="Title"
      />
      <br />
      <textarea
        disabled={!note.isEditing}
        placeholder="Content"
        onChange={(e) => editCard(note.id, { content: e.target.value })}
        value={note.content || ""}
      ></textarea>
      <br />
      <button onClick={toggleEdit}>{note.isEditing ? "Save" : "Edit"}</button>
      <button onClick={() => handleDelete(note.id)}>Delete</button>
    </div>
  );
};

export default NoteCard;
