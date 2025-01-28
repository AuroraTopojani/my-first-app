import { useRef } from 'react';

export default function ClearInput() {
  let inputRef = useRef('');

  function handleChange(text) {
    inputRef.current.value = text;
  }

  function handleClick() {
    inputRef.current.value = '';
  }

  return (
    <>
      <input
        ref={inputRef}
        onChange={(event) => handleChange(event.target.value)}
        value={inputRef.current}
      />
      <button onClick={handleClick}>Clear</button>
    </>
  );
}
