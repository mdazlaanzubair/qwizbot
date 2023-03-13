import { createContext, useContext, useState } from "react";

const TextTranslationContext = createContext();

export const useTextTranslationContext = () =>
  useContext(TextTranslationContext);

const TextTranslationProvider = ({ children }) => {
  const [translatedText, setTranslatedText] = useState("");

  const value = { translatedText, setTranslatedText };
  return (
    <TextTranslationContext.Provider value={value}>
      {children}
    </TextTranslationContext.Provider>
  );
};

export default TextTranslationProvider;
