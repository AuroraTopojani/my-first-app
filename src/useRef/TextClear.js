import { useRef } from "react";

export default function TextClear() {
  const inputRef = useRef(null);
  const Eradicate = () => {
    inputRef.current.value = " ";
  };
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={Eradicate}> Eradicate </button>
    </div>
  );
}
