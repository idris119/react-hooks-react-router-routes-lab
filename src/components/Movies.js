import React from "react";
import { movies } from "../data";

function Movies() {
  const  movieItems=movies.map((item)=>(
    <div key={item.title}>
      <h2>{item.title}</h2>
      <p>{item.time}</p>
      <ul>
        {item.genres.map((genre)=>(
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return (<div>
    <h1>Movies Page</h1>
    {movieItems}
  </div>
  );
}

export default Movies;
