import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";

import React from "react";
import { auth } from "@/lib/firebase";
import { signOut } from "firebase/auth";

export default function Logout() {
  const [user] = useAuthState(auth);
  const router = useRouter();
  const userSession = sessionStorage.getItem("user");

  const handleLogOut = () => {
    signOut(auth);
    sessionStorage.removeItem("user");
  };

  return <Button onClick={handleLogOut}>Odjavi se</Button>;
}
