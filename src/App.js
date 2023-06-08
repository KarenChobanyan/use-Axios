import { useEffect, useRef, useState } from 'react';
import './App.css';
import './styles/header.css'
import "./styles/main.css"
import "./styles/post.css"
import "./styles/comment.css"
import './styles/users.css'
import Header from './header/Header';
import { HeaderNavContext } from "./contexts/headerNavContext"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './main/Main';
import PostList from './posts/PostList';
import CommentList from './commnets/CommentList';
import UsersList from './users/UsersList';
import User from './users/User';

function App() {
  const [headerNavState, setHeaderNavState] = useState("")


  return (
    <>
      <BrowserRouter>
        <HeaderNavContext.Provider value={[headerNavState, setHeaderNavState]}>
          <div>
            <Header />
            <Routes>
              <Route path={'/'} element={<Main />} />
              <Route path='/posts' element={<PostList />}>
                <Route path=":id/comments" element={<CommentList />} />
                <Route path='user/:id' element={<User path={'/posts'}/>}/>
              </Route>
              <Route path="/usersList" element={<UsersList/>}>
                <Route path='user/:id' element={<User path={'/usersList'}/>}/>
              </Route>
            </Routes>
          </div>
        </HeaderNavContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App;
