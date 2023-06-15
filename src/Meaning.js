import React from "react";
import Synonym from "./Synonym";
import "./Meaning.css"
import Pronunciation from "./Pronunciation";
export default function Meaning(props) {
    return (
      <div className="Meaning">
        <Pronunciation/>
        <h3>{props.meaning.partOfSpeech}</h3>
        <div className="definition">{props.meaning.definition}</div>
        <div className="example">
          <em>{props.meaning.example}</em>
        </div>
        <Synonym synonyms={props.meaning.synonyms} />
      </div>
    );
  }