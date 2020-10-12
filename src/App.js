import React, { useEffect, useState} from 'react';
import './App.css';
import Navbar from '../src/Component/Navbar/Navbar'
import Post from './Component/Post/Post';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PostDetails from './Component/PostDetails/PostDetails';


function App() {
 
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

  return (
    <div className="App">
        <Router>
          <Navbar></Navbar>
          <Switch>
          <Route exact path="/">
            <Post posts={posts}></Post>
          </Route>
          <Route path="/posts/:postId">
            <PostDetails posts={posts}></PostDetails>
          </Route>
        </Switch>
        </Router>
    </div>
  )
}
export default App;
