import { useAppContext } from "./contexts/AppContext";
import ThemeToggler from "./helpers/components/ThemeToggler";
import Toaster from "./helpers/components/Toaster";
import AppRoutes from "./routing/AppRoutes";

function App() {
  const { isDarkModeOn } = useAppContext();

  return (
    <div
      id="App"
      className="App relative main-website-holder m-0 p-20 min-h-screen font-default"
      data-theme={isDarkModeOn ? "night" : "winter"}
    >
      {/* theme toggler */}
      <ThemeToggler />

      {/* pages components and their routes */}
      <AppRoutes />

      {/* toaster alert */}
      <Toaster />
    </div>
  );
}

export default App;
