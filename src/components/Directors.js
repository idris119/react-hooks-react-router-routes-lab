import React from "react";
import { directors } from "../data";

function Directors() {
  const directorItems = directors.map((ditem)=>(
    <div key ={ditem.name}>
      <h3>{ditem.name}</h3>
      <ul>
        {ditem.movies.map((movie)=>(
          <li key={movie}>{movie}</li>
        ))}
      </ul>
    </div>
  ));
  return (
  <div><h1>Directors Page</h1>
  {directorItems}
  </div>
  );
}

export default Directors;
