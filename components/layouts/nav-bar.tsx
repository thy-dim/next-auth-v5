import { auth } from "@/auth";
import Link from "next/link";
import React from "react";
import UserButton from "../user-button";
import SignInButton from "../signin-button";

export default async function NavBar() {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="shadow-sm">
      <nav className="container mx-auto h-16 flex items-center justify-between">
        <Link
          href={"/"}
          className="font-bold text-xl"
          aria-label="go to home link"
        >
          Next Auth5
        </Link>
        {user ? <UserButton user={user} /> : <SignInButton />}
      </nav>
    </header>
  );
}
