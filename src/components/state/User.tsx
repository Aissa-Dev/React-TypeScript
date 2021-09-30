import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "aissa",
      email: "aissadev@gmail.com"
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <div>User name is : {user?.name}</div>
      <div>Email is : {user?.email}</div>
      <h3>{JSON.stringify(user)}</h3>
    </div>
  );
};
