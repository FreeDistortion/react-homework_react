import React from 'react';

const Comment = ({id,writer,rank,content,write_date,deleteRun}) => {
    return (
        <div className='comment'>
            <div className='info'>
                <span>writer: {writer} -------------- like: {rank} </span><br/>
                <span className='date'>write_date: {write_date}</span>
                <div>
                    content: {content}
                </div>
            </div>

            <button onClick={
                ()=>{console.log(id,"---------")
                if(window.confirm(`Do you really want to delete this comment of ${id}?`)){
                    deleteRun(id)
                }
            }
            }>Delete</button>
            <button>Update</button>
            <button>Show details...</button>
        </div>
    );
};

export default Comment;