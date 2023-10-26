import { useEffect, useState } from "react";
import Movie from "./Movie";

export default function MovieList({movieList, createMovieProp}) {
  const [searchKeyword, setSearchKeyword]= useState("");
  
  const createKW = (e) => {
    setSearchKeyword(e.target.value);
  }
  
 
const filteredadded = movieList.filter(
  (e)=>e.title.includes(searchKeyword)
)
  return (
    <div className="row text-center">
      <input type='text' onChange={createKW} className="col-4" placeholder="search for movie title"></input>
      <div>You seached for title includes: {searchKeyword}</div>
          {filteredadded.map((n) =>
          <Movie {...n} key={n.movieId}></Movie>
        )}
        <hr/>
        </div>
  );
}
