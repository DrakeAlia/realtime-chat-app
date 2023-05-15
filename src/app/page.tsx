"use client";

import Button from "@/components/ui/Button";
import { signOut } from "next-auth/react";

export default async function Home() {
  return <button onClick={() => signOut()}>Sign out</button>;
}
