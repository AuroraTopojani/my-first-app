import { useRef } from "react";

export default function UnControlledComp() {
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const firtsNameInput = firstName.current.value;
    const lastNameInput = lastName.current.value;
    const emailInput = email.current.value;
  };
  return (
    <div>
      <h1>UNCONTROLLED COMPONENT</h1>
      <form onSubmit={handleSubmit}>
        <label>
          FIRST NAME
          <input type="text" placeholder="name" ref={firstName} />
        </label>
        <label>
          LAST NAME
          <input type="text" placeholder="lastname" ref={lastName} />
        </label>
        <label>
          EMAIL
          <input type="text" placeholder="email" ref={email} />
        </label>
        <button>SUBMIT </button>
      </form>
    </div>
  );
}
