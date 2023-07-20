import { Route, Routes, Link } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "./App.css";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <main className="App">
      <Header className="header" />
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:article_id" element={<SingleArticle />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer className="footer" />
    </main>
  );
}

export default App;
