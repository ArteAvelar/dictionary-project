import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.data) {
    return (
      <div className="results">
        <h2>{props.data.word}</h2>
        {props.data.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meanings meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
