import { useState } from "react";

export default function ControlledComp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
  };
  return (
    <div>
      <h1>CONTROLLED COMPONENT</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FIRST NAME
          <input
            type="text"
            placeholder="name"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
            minLength={6}
          />
        </label>
        <label>
          LAST NAME
          <input
            type="text"
            placeholder="lastname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            maxLength={5}
          />
        </label>
        <label>
          EMAIL
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
        <button>SUBMIT </button>
      </form>
    </div>
  );
}
