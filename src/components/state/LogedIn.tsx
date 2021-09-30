import { useState } from "react";
export const LogedIn = () => {
  const [isLoggeIn, setIsloggedIn] = useState(false);

  const handleLogin = () => {
    setIsloggedIn(true);
  };
  const handleLogout = () => {
    setIsloggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <h3>{isLoggeIn ? "Logged in" : "Logged out"}</h3>
    </div>
  );
};
