import { useMemo, useState } from "react";

export default function Counter() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);

  const increaseOne = () => {
    setCountOne(countOne + 1);
  };
  const increaseTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 20000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <button onClick={increaseOne}>COUNTER ONE {countOne}</button>
      <p>{isEven ? "IS EVEN" : "IS ODD"}</p>
      <br />
      <button onClick={increaseTwo}>COUNTER TWO {countTwo}</button>
    </div>
  );
}
