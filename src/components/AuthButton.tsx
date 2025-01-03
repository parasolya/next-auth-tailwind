"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <button onClick={() => signOut()} className="btn">
          Sign Out
        </button>
      ) : (
        <button onClick={() => signIn()} className="btn">
          Sign In
        </button>
      )}
    </div>
  );
}