import logo from "./logo.svg";
import "./App.css";
import Body from "./components/Body";

import React, { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (title) => {
    const newNote = {
      id: Date.now(),
      title: title,
    };

    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const deleteNote = (id) => {
    setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
  };
  return (
    <div>
      <Body addNote={addNote} deleteNote={deleteNote} notes={notes} />
    </div>
  );
}
