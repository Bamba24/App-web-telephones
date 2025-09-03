"use client";

import { ContextConnectionProvider } from "@/app/context/AuthContext";
import { Toaster } from "mui-sonner";
import Header from "@/app/components/acceuil/header";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <ContextConnectionProvider>
      <Header />
      <Toaster />
      {children}
    </ContextConnectionProvider>
  );
}
