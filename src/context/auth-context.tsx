"use client";

import React, { createContext, useContext, useState } from "react";

type AuthContextProps = {
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextProps | null>(null);

export function AuthContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  if (AuthContext) {
    return useContext(AuthContext);
  }

  throw new Error("AuthContext is missing");
}
