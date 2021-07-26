import React, { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();
    if (text) {
      props.onAddItem(text);
      setText("");
    }
  }

  return (
      <div className="form">
    <form>
      <input className="textInput" onChange={handleChange} type="text" value={text}></input>
      <button className="add" onClick={addItem}>Add</button>
    </form>
    </div>
  );
}

export default TodoForm;
