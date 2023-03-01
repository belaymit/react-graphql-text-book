import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import "../assets/css/style.css";

const initialPosts = [
  {
    id: 1,
    text: "Lorem ipsum",
    user: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7AKCL0riiZY8W8HBVY4ROGDhzFCrApC__1SB-SsBbNQ&s",
      username: "Test User 2",
    },
  },
  {
    id: 2,
    text: "Lorem ipsum",
    user: {
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmQJc4GrJhI31Fd5zTc84WxQ1xNDk6y-yDx28jtsKi&s",
      username: "Test User",
    },
  },
];
const App = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newPost = {
      id: posts.length + 1,
      text: postContent,
      user: {
        avatar: "/uploads/avatar1.png",
        username: "Fake User",
      },
    };
    setPosts([newPost, ...posts]);
    setPostContent("");
  };

  return (
    <div className="container">
      <Helmet>
        <title>Graphbook - Feed</title>
        <meta
          name="description"
          content="News feed of all
 your friends on Graphbook"
        />
      </Helmet>
      <div className="postForm">
        <form onSubmit={handleSubmit}>
          <textarea
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="Write your custom post!"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div className="feed">
        {posts.map((post, i) => (
          <div key={post.id} className="post">
            <div className="header">
              <img src={post.user.avatar} />
              <h2>{post.user.username}</h2>
            </div>
            <p className="content">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;