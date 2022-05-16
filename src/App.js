import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Movie from "./pages/Movie";

function App() {
  return (
    <Router>
      <MovieProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </MovieProvider>
    </Router>
  );
}

export default App;
