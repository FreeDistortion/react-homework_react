import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MovieApp from './component/movie/MovieApp';
import Movie_Head from './component/Header';
import CommentApp from './component/comment/CommentApp'
function App() {
  return (
    <BrowserRouter>
      <>
        <Movie_Head></Movie_Head>
        <MovieApp></MovieApp>
        <Routes>
          <Route path='/comment' element={
            <CommentApp></CommentApp>
          }></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
