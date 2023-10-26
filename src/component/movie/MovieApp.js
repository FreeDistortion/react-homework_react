import React, { useEffect, useState } from 'react';
import MovieList from './MovieList';
import MovieWrite from './MovieWrite';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const MovieApp = () => {
    const [movieList, setMovieList] = useState([]);
    // const [searchKeyword, setSearchKeyword]= useState("");

    const createMovie = (movieId, title, url, genre, alt) => {
        const newInfo={movieId, title, url, genre, alt}
        setMovieList([...movieList,newInfo])
     }

    //  const createKW = (e) => {
    //    setSearchKeyword(e.target.value);
    //  }
    useEffect(
        () => { getMovies() },[]
      )
      const getMovies = async () => { 
        let movies = await fetch("https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101")
        .then((result) => result.json() );
        console.log(movies.boxOfficeResult.dailyBoxOfficeList)
        const boxofficeMovieList=movies.boxOfficeResult.dailyBoxOfficeList
        .map((movie) => { 
          return{
            movieId: movie.movieCd,
            title: movie.mocieNm,
          }
         })
         createMovie(boxofficeMovieList)
       }
    
    
    return (
        <div>
            <hr/>
                {/* <input type='text' onChange={createKW}></input> */}
            <Routes>
            <Route path='/list' element={
                <MovieList movieList={movieList} 
                // createMovieProp={createMovie}
                // searchKeyword={searchKeyword}
                ></MovieList>
            }/>
            <Route path='/write' element={
                <MovieWrite createMovieProp={createMovie}></MovieWrite>
            }/>
            </Routes>
        </div>
    );
};

export default MovieApp;