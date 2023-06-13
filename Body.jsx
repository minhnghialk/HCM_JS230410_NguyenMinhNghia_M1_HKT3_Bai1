import React, { useState } from "react";

export default function Body({ addNote, deleteNote, notes }) {
  const [inputValue, setInputValue] = useState("");
  const handleAddNote = () => {
    const inputBox = document.getElementById("inputBox");
    const title = inputBox.value;
    if (title) {
      addNote(title);
      inputBox.value = "";
    }
  };
  const handleDeleteNote = (id) => {
    deleteNote(id);
  };
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div>
      <h1>Note App</h1>
      <div className="div1">
        <label htmlFor="">Title</label> <br />
        <input
          type="text"
          placeholder=" take a note..."
          value={inputValue}
          onChange={handleChange}
          id="inputBox"
        />
        <i className="fa-solid fa-circle-plus" onClick={handleAddNote} />
      </div>
      <div className="div2">
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              {note.title}
              <i
                className="fa-solid fa-trash"
                onClick={() => handleDeleteNote(note.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
