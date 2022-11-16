import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ notes, onAdd, currentNote, setCurrentId }) => {
  let noteList = notes.map((d) => {
    return (
      <div
        className="sidebar-items"
        key={d.id}
        tabindex="0"
        onClick={() => {
          // console.log(e.target.innerText);
          setCurrentId(d.id);
        }}
      >
        {d.name}
      </div>
    );
  });

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <h3>Notes</h3>
        <button
          className="sidebar-btn"
          onClick={() => {
            onAdd({
              id: notes.length + 1,
              name: `Note${notes.length + 1}`,
              content: "Hello World",
            });
          }}
        >
          +
        </button>
      </div>
      <div className="sidebar-bottom">{noteList}</div>
    </div>
  );
};

export default Sidebar;
