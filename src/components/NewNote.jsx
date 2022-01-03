import React from "react";

export function NewNote(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.note}</p>
      <button id={props.note} onClick={props.onRemove}>
        Delete
      </button>
    </div>
  );
}
