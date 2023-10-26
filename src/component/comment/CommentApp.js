import { useRef, useState } from 'react';
import '../../App.css';
import CommentWrite from './CommentWrite';
import CommnetList from './CommnetList';

function App() {
  // not gonna use dummydata to store created data
  // 댓글 목록에 있는 값이 변경되면 render해야 하므로 state로 관리해야 한다.
  const [datalist,setDatalist]= useState([]);

  // CommentWrite component에서 발생한 값을 전달받을 function define.

    // useRef()
    // !React function access to storage or DOM element
    // !it doesn't render when data was changed
    // !use value via using current property
    const dataId=useRef(0)
  const createData = (writer,content,rank) => {
    const write_date = new Date().toLocaleString();
    const newComment = {
      writer,content,rank,write_date,
      id:dataId.current
    }
    dataId.current+=1;
    setDatalist([...datalist,newComment]);
   }

  // define function to delete
   const commentDelete = (targetId) => {
    // return other articles except for deleted article
    // change state value into array that meet the condition by using filter
     const newCommentlist = datalist.filter(comment => comment.id!==targetId)
     console.log(newCommentlist)


     setDatalist(newCommentlist);
    }

  return (
    <div>
      {/* 정의한 함수를 CommentWrite component의 props로 전달 */}
      <CommentWrite createDataProp={createData}></CommentWrite>

      {/* list를 CommentList의 property로 전달 */}
      <CommnetList commentlist={datalist} deleteRun={commentDelete}></CommnetList>
    </div>
  );
}

export default App;