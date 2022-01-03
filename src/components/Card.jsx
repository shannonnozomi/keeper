import React from "react";

export function Card(props) {
  return (
    <div className="note">
      <h1>
        <input
          name="title"
          value={props.title}
          onChange={props.onChange}
          placeholder="Title"
        ></input>
      </h1>
      <p>
        <textarea
          name="note"
          value={props.content}
          onChange={props.onChange}
          placeholder="Take a note..."
        ></textarea>
      </p>
      <button onClick={props.buttonClick}>Add</button>
    </div>
  );
}
