import { useState } from "react";
export default function CounterApp() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          setCounter(0);
        }}
      >
        Reset
      </button>
      <p>Counter: {counter}</p>
    </div>
  );
}
