import React from "react";

export default function Results(props) {
  console.log(props.data);

  if (props.data) {
    return <div className="results">Hello from results</div>;
  } else {
    return null;
  }
}
