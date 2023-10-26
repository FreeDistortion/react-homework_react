import React, { useState } from 'react';

const CommentWrite = ({createDataProp}) => {

    // let [writer,setWriter] = useState("");
    // let [content,setContent] = useState("");
    // 상태 변화를 저장할 때에는 항상 새 object를 만들어서 변경시켜야 함.
    const [commentState,setCommentState]=useState(
        {
        writer:"",
        content:"",
        rank:1
        }
    )

    const changeState = (e) => {
        console.log(e)
        setCommentState(
            {...commentState,[e.target.name]:e.target.value}
            )
    }

    // function called when save button clicked
    const createSubmit = () => {
        createDataProp(commentState.writer,commentState.content,commentState.rank)
    }

    return (
        <div className="commentEditor">
        <h2>댓글</h2>
        <div>
            <input
            name="writer"
            placeholder="작성자"
            type="text"
            value={commentState.writer}
            onChange={changeState}
            // {(e)=>setCommentState({writer:e.target.value, content:commentState.content})}

            />
        </div>

        <div>
            <textarea
            name="content"
            placeholder="내용"
            type="text"
            value={commentState.content}
            onChange={changeState}/>
        </div>

        <div>
            <span>별점평가 : </span>
            <select name="rank" value={commentState.rank} onChange={changeState}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={createSubmit}>일기 저장하기</button>
        </div>
    </div>
    );
};

export default CommentWrite;