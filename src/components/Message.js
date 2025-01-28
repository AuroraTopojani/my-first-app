export default function Message({ children, onChangeMessage }) {
  return (
    <>
      <button onClick={onChangeMessage}>{children}</button>
      <button onClick={onChangeMessage}>{children}</button>
    </>
  );
}
