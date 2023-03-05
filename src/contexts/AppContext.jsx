import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [theme, setTheme] = useState("night");

  const value = { isLoading, setIsLoading, theme, setTheme };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
