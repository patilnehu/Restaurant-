"use client";

import { useAuth } from "@/app/context/auth-context";
import Login from "@/app/login/page";

import { ReactNode } from "react";

export default function ClientContent({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Login />;
  }

  return <>{children}</>;
}
