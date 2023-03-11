import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const value = { isLoading, setIsLoading, isDarkModeOn, setIsDarkModeOn };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
