import { createContext, useContext, useState } from "react";

const KeywordContext = createContext();

export const useKeywordContext = () => useContext(KeywordContext);

const KeywordProvider = ({ children }) => {
  const [keywords, setKeywords] = useState([]);

  const value = { keywords, setKeywords };
  return (
    <KeywordContext.Provider value={value}>{children}</KeywordContext.Provider>
  );
};

export default KeywordProvider;
