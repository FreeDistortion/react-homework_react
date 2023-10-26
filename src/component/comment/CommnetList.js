 import React from 'react';
import Comment from './Comment';

const CommnetList = ({commentlist, deleteRun}) => {
    return (
        <div className='commentList'>
            <h1>comment list (count: {commentlist.length})</h1>
            <div>
                {commentlist.map(
                    comment => <Comment {...comment} key={comment.id} deleteRun={deleteRun}></Comment>
                )}
            </div>
        </div>
    );
};
// property가 전달되지 않는 경우, default prop 정의 가능
CommnetList.defaultProps={
    commentlist:[]
}


export default CommnetList;