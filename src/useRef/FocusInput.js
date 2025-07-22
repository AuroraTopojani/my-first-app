import { useEffect, useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);
  //   const handleFocus = () => {
  //     inputRef.current.focus();
  //   };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <h1>FOCUS THE INPUT</h1>
      <input type="text" placeholder="write a text" ref={inputRef} />
      {/* <button onClick={handleFocus}>FOCUS</button> */}
    </div>
  );
}
