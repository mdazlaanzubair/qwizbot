import { createContext, useContext, useState } from "react";

const GrammarContext = createContext();

export const useGrammarContext = () => useContext(GrammarContext);

const GrammarProvider = ({ children }) => {
  const [correctedText, setCorrectedText] = useState("");

  const value = { correctedText, setCorrectedText };
  return (
    <GrammarContext.Provider value={value}>{children}</GrammarContext.Provider>
  );
};

export default GrammarProvider;
