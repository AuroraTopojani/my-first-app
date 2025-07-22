import { useEffect, useState } from "react";
import axios from "axios";
import { Alert } from "@mui/material";
export default function GetPostAxios() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.error("ERROR FETCHING DATA", error));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
        alert("THE POST IS DELETED");
      });
  };

  return (
    <div>
      <h2>AXIOS POSTS</h2>
      {posts.slice(0, 6).map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button onClick={() => handleDelete(post.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
}
