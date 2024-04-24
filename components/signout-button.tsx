import React from "react";
import { signOut } from "@/auth";
import { LogOut } from "lucide-react";

export default function SignOutButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button type="submit" className="flex w-full items-center">
        <LogOut className="mr-2 h-4 w-4" /> Sign Out
      </button>
    </form>
  );
}
