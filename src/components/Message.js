export default function Message({ children, onChangeMessage }) {
  return <button onClick={onChangeMessage}>{children}</button>;
}
