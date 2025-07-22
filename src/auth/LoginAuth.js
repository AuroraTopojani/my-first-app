import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        const token = response.data.token;
        console.log("TOKEN RECEIVED");
        localStorage.setItem("authToken", token);
      })
      .catch((error) => console.error("LOGIN FAILED", error));
  };
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>LOG IN</button>
      </form>
    </div>
  );
}
