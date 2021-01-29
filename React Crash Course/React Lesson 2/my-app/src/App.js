import React, { useState } from "react";
import "./App.css";

import Navbar from "./Navbar";
import Input from "./Input";
import Post from "./Post";
import { element } from "prop-types";

let id = 1;

function App() {
  const [posts, setPosts] = useState([]);

  function addPost(title) {
    const newPost = { id: id, title: title };
    setPosts([newPost, ...posts]);
    id += 1;
  }
  return (
    <div className="App">
      <Navbar />
      <Input addPost={addPost} />
      {posts.map((element) => (
        <Post id={posts.id} title={posts.title} />
      ))}
    </div>
  );
}

export default App;
