export default function AlertBox({ children }) {
  return <button onClick={Clicked}>{children}</button>;
}
function Clicked() {
  console.log('Button Clicked!');
}
