import React, { useState, useEffect } from "react";

const App = () => {
  const [posts, setPosts] = useState([]); // State to hold fetched posts
  const [error, setError] = useState(null); // State to hold any error messages

  useEffect(() => {
    // Fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
          throw new Error(`Failed to fetch posts: ${response.statusText}`);
        }
        const data = await response.json();
        setPosts(data); // Update state with fetched posts
      } catch (err) {
        setError(err.message); // Update state with error message
      }
    };

    fetchPosts();
  }, []); // Dependency array is empty to ensure it runs only once

  return (
    <div>
      <h1>Blog Posts</h1>
      {/* Conditional rendering based on API call state */}
      {error ? (
        <div style={{ color: "red" }}>
          <h2>Error:</h2>
          <p>{error}</p>
        </div>
      ) : posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
