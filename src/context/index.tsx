import { createContext, useState } from "react";

export const UserContext = createContext<any>(null);

const UserProvider = UserContext.Provider;

export const ConnectionContextProvider = ({ children }: any) => {
  const [loading, setLoading] = useState<boolean>(false);
  return <UserProvider value={loading}></UserProvider>;
};
