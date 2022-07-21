import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword}`);
    console.log(keyword);
  }

  function changeKeyword(event) {
    setKeyword(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={changeKeyword} />
        <input type="submit" value="search" className="btn btn-primary" />
      </form>
    </div>
  );
}
