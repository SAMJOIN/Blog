import { useEffect } from 'react';
import './App.css';
import { getPosts } from './Redux/reducer';
import { connect } from 'react-redux';
import { RootState } from './Redux/redux-store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './Components/MainPage/MainPage';
import PostPage from './Components/PostPage/PostPage';

function App(props: any) { //TODO типизировать

  useEffect(() => {
    props.getPosts();
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage posts={props.posts}/>}/>
        <Route path='/:postID' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const mapStateToProps = (state: RootState): object => ({ // TODO Посмотреть как делать через хуки
  posts: state.posts
})

export default connect(mapStateToProps, { getPosts })(App);
