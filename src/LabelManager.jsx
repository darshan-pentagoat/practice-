import React, { useState } from "react";

const LabelManager = () => {
  const [labels, setLabels] = useState([]); // List of labels
  const [newLabel, setNewLabel] = useState(""); // Input value for new label
  const [editingLabelId, setEditingLabelId] = useState(null); // ID of the label being edited
  const [editedText, setEditedText] = useState(""); // Text of the label being edited

  // Function to handle adding a new label
  const addLabel = () => {
    if (newLabel.trim()) {
      const newLabelItem = { id: Date.now(), text: newLabel };
      setLabels([...labels, newLabelItem]);
      setNewLabel(""); // Clear input after adding
    }
  };

  // Function to handle editing a label
  // const editLabel = (id) => {
  //   const labelToEdit = labels.find((label) => label.id === id);
  //   setEditingLabelId(id);
  //   setEditedText(labelToEdit.text);
  // };

  const editLabel = (id) => {
    const labelToEdit = labels.find((label) => label.id === id);
    setEditingLabelId(id);
    setEditedText(labelToEdit.text);
  };

  // Function to save the edited label text
  const saveEditedLabel = (id) => {
    setLabels(
      labels.map((label) =>
        label.id === id ? { ...label, text: editedText } : label
      )
    );
    setEditingLabelId(null); // Exit edit mode
  };

  // Function to delete a label
  const deleteLabel = (id) => {
    setLabels(labels.filter((label) => label.id !== id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Label Manager</h2>

      {/* Input box to add new label */}
      <input
        type="text"
        value={newLabel}
        onChange={(e) => setNewLabel(e.target.value)}
        placeholder="Add new label"
      />
      <button onClick={addLabel}>Add</button>

      {/* Display each label with edit and delete options */}
      <ul style={{ listStyle: "none", padding: 0 }}>
        {labels.map((label) => (
          <li
            key={label.id}
            style={{ display: "flex", alignItems: "center", margin: "10px 0" }}
          >
            {editingLabelId === label.id ? (
              <>
                {/* Input for editing label text */}
                <input
                  type="text"
                  value={editedText}
                  onChange={(e) => setEditedText(e.target.value)}
                />
                <button onClick={() => saveEditedLabel(label.id)}>Save</button>
              </>
            ) : (
              <>
                {/* Display label text */}
                <span style={{ marginRight: "10px" }}>{label.text}</span>
                <button onClick={() => editLabel(label.id)}>Edit</button>
              </>
            )}
            <button
              onClick={() => deleteLabel(label.id)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabelManager;

// import React, { useState } from "react";

// const LabelManager = () => {
//   const [labels, setLabels] = useState([]); // List of labels
//   const [newLabel, setNewLabel] = useState(""); // New label input
//   const [isEditing, setIsEditing] = useState(false); // Editing state
//   const [currentLabelId, setCurrentLabelId] = useState(null); // ID of the label being edited

//   // Function to add a new label
//   const handleAddLabel = () => {
//     if (newLabel.trim() === "") return; // Check if input is empty
//     const newLabelItem = { id: Date.now(), text: newLabel };
//     setLabels([...labels, newLabelItem]);
//     setNewLabel(""); // Clear input
//   };

//   // Function to delete a label
//   const handleDeleteLabel = (id) => {
//     setLabels(labels.filter((label) => label.id !== id));
//   };

//   // Function to start editing a label
//   const handleEditLabel = (id, text) => {
//     setIsEditing(true);
//     setCurrentLabelId(id);
//     setNewLabel(text);
//   };

//   // Function to save the edited label
//   const handleSaveEdit = () => {
//     setLabels(
//       labels.map((label) =>
//         label.id === currentLabelId ? { ...label, text: newLabel } : label
//       )
//     );
//     setIsEditing(false);
//     setNewLabel("");
//   };

//   return (
//     <div>
//       <h2>Simple Label Manager</h2>

//       {/* Input for adding or editing a label */}
//       <input
//         type="text"
//         value={newLabel}
//         onChange={(e) => setNewLabel(e.target.value)}
//         placeholder="Enter label"
//       />

//       {/* Button to add or save label */}
//       <button onClick={isEditing ? handleSaveEdit : handleAddLabel}>
//         {isEditing ? "Save" : "Add"}
//       </button>

//       {/* List of labels */}
//       <ul>
//         {labels.map((label) => (
//           <li key={label.id}>
//             {label.text}
//             <button onClick={() => handleEditLabel(label.id, label.text)}>
//               Edit
//             </button>
//             <button onClick={() => handleDeleteLabel(label.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LabelManager;
