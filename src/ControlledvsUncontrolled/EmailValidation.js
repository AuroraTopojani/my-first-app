import { useState } from "react";

export default function EmailValidation() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(""); //"EMAIL IS INVALID";

  const validateEmail = (value) => {
    //aurora@gmail.com
    if (!value) return "EMAIL IS REQUIRED";
    if (!/\S+@\S+\.\S+/.test(value)) return "EMAIL IS INVALID";
    return "";
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(validateEmail(value)); //auroragmail.com
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>EMAIL VALIDATION</h1>
        <input
          type="text"
          placeholder="Write email"
          value={email}
          onChange={handleEmailChange}
        />
        {emailError && <p style={{ color: "red" }}> {emailError}</p>}
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  );
}
