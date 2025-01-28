import { useState } from 'react';

export default function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isLoggedIn=false
  const LoggedInToggle = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <>
      <button onClick={LoggedInToggle}>
        {isLoggedIn ? 'Logout.' : 'Login.'}
      </button>
      {isLoggedIn ? <p>You are logged in.</p> : <p>You are logged out.</p>}
    </>
  );
}
