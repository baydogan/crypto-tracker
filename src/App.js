import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";
import CoinDetail from "./pages/CoinDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useOptionsContext } from "./hooks/useContextHooks/useOptionsContext";

function App() {
  const { darkMode } = useOptionsContext();
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#1E293B";
    }
  }, []);

  return (
    <div className="bg-white dark:bg-slate-800 h-full transition-all duration-300 min-h-full">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/:id" element={<CoinDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
