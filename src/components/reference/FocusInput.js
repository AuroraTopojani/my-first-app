import { useEffect, useRef } from 'react';

export default function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    //focus ne element
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <input ref={inputRef} type="text" />
      </div>
    </>
  );
}
