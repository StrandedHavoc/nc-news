import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <main className="App">
      <Header className="header" />
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route className="articles-list" path="/" element={<Home />} />
      </Routes>
      <Home />
      <Footer className="footer" />
    </main>
  );
}

export default App;
