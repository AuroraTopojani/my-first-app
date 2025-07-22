import { useEffect } from "react";
export default function Welcome() {
  useEffect(() => {
    //side effects / functions
    console.log("WELCOME");
  }, []); //empty for initial load
  return <p>WELCOME</p>;
}
