import React, { useState, useEffect } from "react";
import Sidebar from "./componenets/Sidebar";
import Editor from "./componenets/Editor";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

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

  const handleDeleteNote = (event, id) => {
    event.stopPropagation();
    console.log("delete", id);
    setNotes((preNotes) => {
      let a = preNotes.filter((d) => {
        return d.id != id;
      });
      return a;
    });
  };

  // for editor
  const handleUpdateContent = (text) => {
    console.log(text);
    setNotes((oldNotes) => {
      const newArray = [];
      for (let i = 0; i < oldNotes.length; i++) {
        const oldNote = oldNotes[i];
        if (oldNote.id === currentId) {
          newArray.unshift({ ...oldNote, content: text });
        } else {
          newArray.push(oldNote);
        }
      }
      return newArray;
    });
    // setNotes((oldNotes) =>
    //   oldNotes.map((oldNote) => {
    //     return oldNote.id === currentId
    //       ? { ...oldNote, content: text }
    //       : oldNote;
    //   })
    // );
  };
  return (
    <div className="app">
      <Sidebar
        notes={notes}
        onAdd={handleAddNote}
        currentNote={findCurrentNote()}
        setCurrentId={setCurrentId}
        onDelete={handleDeleteNote}
      ></Sidebar>
      {currentId && (
        <Editor item={findCurrentNote()} onUpdate={handleUpdateContent} />
      )}
    </div>
  );
};

export default App;
