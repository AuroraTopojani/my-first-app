import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action) {
    case 'show':
      return true;
    case 'hide':
      return false;
    default:
  }
};

export default function ShowHide() {
  const [showMessage, showMessageDispatcher] = useReducer(reducer, true);
  return (
    <>
      <button onClick={() => showMessageDispatcher('show')}>Show</button>
      <button onClick={() => showMessageDispatcher('hide')}>Hide</button>
      {showMessage && <h1>This is a message</h1>}
    </>
  );
}
