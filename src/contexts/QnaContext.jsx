import { createContext, useContext, useState } from "react";

const QnaContext = createContext();

export const useQnaContext = () => useContext(QnaContext);

const QnaProvider = ({ children }) => {
  const [answer, setAnswer] = useState("");
  const [qnas, setQnas] = useState([]);

  const value = { answer, setAnswer,qnas, setQnas };
  return <QnaContext.Provider value={value}>{children}</QnaContext.Provider>;
};

export default QnaProvider;
