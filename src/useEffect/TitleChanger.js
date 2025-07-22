import { useEffect, useState } from "react";

export default function TitleChanger() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>CLICK HERE</button>
    </div>
  );
}
