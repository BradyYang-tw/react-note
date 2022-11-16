import React, { useState } from "react";
import Sidebar from "./componenets/Sidebar";
import Editor from "./componenets/Editor";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [currentId, setCurrentId] = useState("");

  // For Sidebar call
  const handleAddNote = (data) => {
    console.log("trigger");
    setNotes((prevNotes) => {
      return [...prevNotes, data];
    });
  };

  const findCurrentNote = () => {
    let temp = notes.find((data) => {
      return data.id == currentId;
    });
    return temp;
  };

  // for editor
  const handleUpdateContent = (text) => {
    // console.log("update content", data);
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentId
          ? { ...oldNote, content: text }
          : oldNote;
      })
    );
  };
  return (
    <div className="app">
      <Sidebar
        notes={notes}
        onAdd={handleAddNote}
        currentNote={findCurrentNote()}
        setCurrentId={setCurrentId}
      ></Sidebar>
      {currentId && (
        <Editor item={findCurrentNote()} onUpdate={handleUpdateContent} />
      )}
    </div>
  );
};

export default App;
