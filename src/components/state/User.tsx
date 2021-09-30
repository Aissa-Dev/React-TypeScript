import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "aissa",
      email: "aissadev@gmail.com"
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is : {user?.name}</div>
      <div>Email is : {user?.email}</div>
      <h3>{JSON.stringify(user)}</h3>
    </div>
  );
};
