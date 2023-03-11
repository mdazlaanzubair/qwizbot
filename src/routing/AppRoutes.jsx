import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/layout/Header";
import { useAuth } from "../contexts/AuthContext";
import GrammarProvider from "../contexts/GrammarContext";
import QnaProvider from "../contexts/QnaContext";
import Dashboard from "../pages/Dashboard";
import GrammarCheck from "../pages/GrammarCheck";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import QuestionAnswer from "../pages/QuestionAnswer";
import Signup from "../pages/Signup";
import TranslateText from "../pages/TranslateText";
import RoutesProtector from "./RoutesProtector";

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
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route element={<RoutesProtector user={user} />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
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
            <GrammarProvider>
              <TranslateText />
            </GrammarProvider>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
