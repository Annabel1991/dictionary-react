import React from "react";


export default function Pronunciation(props) {
  if (props.phonetic) {
    return (
      <div className="Pronunciation">
        <h2>{props.phonetic}</h2>
      </div>
    );
  } else {
    return null;
  }
}