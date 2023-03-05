import { useAppContext } from "./contexts/AppContext";
import Toaster from "./helpers/components/Toaster";
import AppRoutes from "./routing/AppRoutes";

function App() {
  const { theme } = useAppContext();

  return (
    <div
      id="App"
      className="App main-website-holder m-0 p-20 font-default"
      data-theme={theme}
    >
      <AppRoutes />

      {/* toaster alert */}
      <Toaster />
    </div>
  );
}

export default App;
