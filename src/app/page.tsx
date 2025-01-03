"use client";

import { useSession } from "next-auth/react";
import AuthButton from "@/components/AuthButton";

const HomePage =() => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div>
        <h1>Please Sign In</h1>
        <AuthButton />
      </div>
    );
  }

  return (
    
    <div>
      <h1>Welcome, {session.user?.name}</h1>
      <AuthButton />
    </div>
  );
}
export default HomePage

