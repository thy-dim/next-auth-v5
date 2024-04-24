import { signIn } from "@/auth";
import React from "react";
import { Button } from "./ui/button";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn();
      }}
    >
      <Button type="submit">Sign In</Button>
    </form>
  );
}
