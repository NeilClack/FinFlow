"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <main>
      <h1>Home Page</h1>
      {!session ? (
        <button type="button" onClick={async () => await signIn()}>
          Sign In
        </button>
      ) : (
        <button type="button" onClick={async () => await signOut()}>
          Sign Out
        </button>
      )}
    </main>
  );
}
