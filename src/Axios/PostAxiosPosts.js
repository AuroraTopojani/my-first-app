import axios from "axios";
import { useState } from "react";

export default function PostAxiosPosts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        description,
        userId: 2,
      })
      .then((response) => {
        alert("POST CREATED", response.data);
      })
      .catch((error) => {
        alert("ERROR CREATING POST", error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
