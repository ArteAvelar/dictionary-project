import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <section>
        <ul className="synonyms">
          {props.synonyms.map(function (synonyms, index) {
            return <li key={index}>{synonyms}</li>;
          })}
        </ul>
      </section>
    );
  } else {
    return null;
  }
}
