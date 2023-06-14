import React from "react";
import Synonym from "./Synonym";

export default function Meaning(props) {
    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>
        <Synonym synonyms={props.meaning.synonyms} />
      </div>
    );
  }