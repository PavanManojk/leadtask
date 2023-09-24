import React from "react";

function imgNote(props) {
  return (
    <div className="note">
      <img src={props.Img}></img>
      <p>{props.content}</p>
    </div>
  );
}

export default imgNote;
