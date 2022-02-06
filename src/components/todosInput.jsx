import { useState } from "react";

export function TodoInput({handleClick}) {
    const [title, setTitle]=useState('')
    const [task, setTask]=useState('')
  return (
    <div className="Input">
      <input
        className="inputTitle"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Type"
      />
      <input
        onChange={(e) => {
          setTask(e.target.value);
        }}
        className="inputBody"
        type="text"
        placeholder="Add Task..."
      />

      <button className="addBtn" onClick={()=>{
          handleClick(title, task)
      }}>Add</button>
    </div>
  );
}
