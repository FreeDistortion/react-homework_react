import React from 'react';
import {Link} from 'react-router-dom'
const Movie_Head = () => {
    return (
        <div className='row'>
            <hr/>
            <Link to={"/list"} className='col-2'>Show Lists</Link>
            <Link to={"/write"} className='col-2'>Put Movie in</Link>
            <Link to={"/comment"} className='col-2'>comments</Link>
            <hr/>
        </div>
    );
};

export default Movie_Head;