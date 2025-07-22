import { useEffect, useState } from "react";

export default function RandomJokes() {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    //side function
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }, []);
  return (
    <div>
      <h1>RANDOM JOKES</h1>
      <h2>{joke}</h2>
    </div>
  );
}
