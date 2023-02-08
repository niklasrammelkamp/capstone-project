import { signIn } from "next-auth/react";

export default function LogIn() {
  return (
    <>
      <h1>Welcome please log in</h1>
      <button onClick={signIn}>login</button>
    </>
  );
}
