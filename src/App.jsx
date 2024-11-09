import React, { useState } from "react";
import NoteCard from "./NoteCard";
import LabelManager from "./LabelManager";

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    const newNote = { id: Date.now(), title: "", isEditing: true };
    setNotes([...notes, newNote]);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editCard = (id, updateCard) => {
    setNotes(
      notes.map((note) => (note.id === id ? { ...note, ...updateCard } : note))
    );
  };

  // search
  const [search, setSearch] = useState("");
  const searchNote = notes.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <button onClick={addNote}>Add</button>
      <input
        type="text"
        placeholder="search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />
      {searchNote.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          handleDelete={handleDelete}
          editCard={editCard}
        />
      ))}
      <LabelManager />
    </div>
  );
};

export default App;
