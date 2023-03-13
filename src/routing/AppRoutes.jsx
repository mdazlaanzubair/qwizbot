import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// context
import { useAuth } from "../contexts/AuthContext";

// pages
import Dashboard from "../pages/Dashboard";
import GrammarCheck from "../pages/GrammarCheck";
import Home from "../pages/Home";
import KeywordExtractor from "../pages/KeywordExtractor";
import NotFound from "../pages/NotFound";
import QuestionAnswer from "../pages/QuestionAnswer";
import Login from "../pages/Login";
import TranslateText from "../pages/TranslateText";
import RoutesProtector from "./RoutesProtector";

// component
import Header from "../components/layout/Header";

// providers
import KeywordProvider from "../contexts/KeywordContext";
import QnaProvider from "../contexts/QnaContext";
import GrammarProvider from "../contexts/GrammarContext";
import TextTranslationProvider from "../contexts/TextTranslationContext";

const AppRoutes = () => {
  // grabbing user (if any) for protected routes
  const { user } = useAuth();

  return (
    <Router>
      {/* header */}
      <Header />

      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RoutesProtector user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route
            path="/qna"
            element={
              <QnaProvider>
                <QuestionAnswer />
              </QnaProvider>
            }
          />
          <Route
            path="/gcorrect"
            element={
              <GrammarProvider>
                <GrammarCheck />
              </GrammarProvider>
            }
          />
          <Route
            path="/translate_text"
            element={
              <TextTranslationProvider>
                <TranslateText />
              </TextTranslationProvider>
            }
          />
          <Route
            path="/keywords"
            element={
              <KeywordProvider>
                <KeywordExtractor />
              </KeywordProvider>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
