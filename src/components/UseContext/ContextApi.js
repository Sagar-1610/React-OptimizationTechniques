import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export const GlobalState = ({ children }) => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);
  return (
    <GlobalContext.Provider value={{ add, setAdd, minus, setMinus }}>
      {children}
    </GlobalContext.Provider>
  );
};
