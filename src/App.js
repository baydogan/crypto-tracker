import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Favorites from "./pages/Favorites";
import CoinDetail from "./pages/CoinDetail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:id" element={<CoinDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
