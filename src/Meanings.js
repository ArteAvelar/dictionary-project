import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <p>
                {" "}
                <strong>Definition: </strong>
                {definition.definition}
                <br />
                <em>
                  <strong>{definition.example}</strong>
                </em>
              </p>
            </div>
          );
        })}
      </section>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
