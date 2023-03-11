import { createContext, useContext, useState } from "react";

const QnaContext = createContext();

export const useQnaContext = () => useContext(QnaContext);

const QnaProvider = ({ children }) => {
  const [qnas, setQnas] = useState([]);

  const value = { qnas, setQnas };
  return <QnaContext.Provider value={value}>{children}</QnaContext.Provider>;
};

export default QnaProvider;
