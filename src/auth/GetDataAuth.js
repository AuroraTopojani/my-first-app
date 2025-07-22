import { useState } from "react";
import axios from "axios";
export default function GetDataAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    const fakeToken = "123456abc";
    localStorage.setItem("authKey", fakeToken);
    setIsLoggedIn(true);
    alert("LOGGED IN AND TOKEN SAVED");
  };
  const handleGetData = async () => {
    const token = localStorage.getItem("authKey");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Data", response.data);
      alert("CHECK THE CONSOLE FOR DATA");
    } catch (error) {
      console.error("ERROR FETCHING DATA", error);
    }
  };

  return (
    <div>
      <h1>AUTH GET DATA</h1>
      {!isLoggedIn ? (
        <button onClick={handleLogin}>LOG IN </button>
      ) : (
        <div>
          <p>URIME YOU ARE LOGGED IN</p>
          <button onClick={handleGetData}>GET DATA</button>
        </div>
      )}
    </div>
  );
}
