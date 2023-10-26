import React, { useState } from 'react';

const MovieWrite = ({createMovieProp}) => {

    // tempState
    const [mState,setMState]=useState({
        movieId:"",
        title:"",
        url:"",
        genre:"",
        alt:""
    })

    // observe changes and replace them
    const observeState = (e) => {
        setMState({...mState,[e.target.name]:e.target.value,alt:(e.target.title.value+" image")})
     }

    // store tempState data was changed to MovieApp's stat variable
    const submitData = () => {
        createMovieProp(
            mState.movieId, mState.title, mState.url, mState.genre, mState.alt
        )
     }

    return (
        <div>
            <h4>Add Movie Datas</h4>
            <hr/>
            <p>MovieId: <input type='text' name='movieId' value={mState.movieId} onChange={observeState}></input></p>
            <p>Title: <input type='text' name='title' value={mState.title} onChange={observeState}></input></p>
            <p>URL: <input type='text' name='url' value={mState.url} onChange={observeState}></input></p>
            <p>Genre: <input type='text' name='genre' value={mState.genre} onChange={observeState}></input></p>
            <hr/>
            <button onClick={submitData}>Save</button>
        </div>
    );
};

export default MovieWrite;