import React, { useState } from "react";

const NoteCard = ({ note, handleDelete, editCard }) => {
  const [labels, setLabels] = useState([]);
  const [labelInput, setLabelInput] = useState("");

  const handleLabelChange = (e) => {
    setLabelInput(e.target.value);
  };

  const addLabel = () => {
    if (labelInput.trim() !== "") {
      const newLabel = { id: Date.now(), text: labelInput };
      setLabels([...labels, newLabel]);
      setLabelInput("");
    }
  };   

  const toggleEdit = () => {
    editCard(note.id, { isEditing: !note.isEditing });
  };

  return (
    <div style={{ margin: "10px 0" }}>
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

      <br />
      <div>
        <input
          type="text"
          value={labelInput}
          onChange={handleLabelChange}
          placeholder="Add a label"
        />
        <button onClick={addLabel}>Add label</button>
        <ul>
          {labels.map((label) => (
            <li key={label.id}>{label.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NoteCard;
