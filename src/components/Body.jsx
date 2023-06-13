import React from "react";

export default function Body() {
  return (
    <div>
      <h1>Note App</h1>
      <div className="div1">
        <label htmlFor="">Title</label> <br />
        <input type="text" placeholder=" take a note..." id="inputBox" />
        <i className="fa-solid fa-circle-plus" onclick="addNote()" />
      </div>
      <div className="div2">
        <ul id="listNote" />
      </div>
    </div>
  );
}
