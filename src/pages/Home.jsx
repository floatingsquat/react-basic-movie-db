import { useContext } from "react";
import MovieList from "../components/MovieList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import MovieContext from "../context/MovieContext";

function Home() {
  const { query, setQuery} = useContext(MovieContext);

  const queryHandler = (e) => {
    setQuery(e.currentTarget.value);
  };

  return (
    <div>
      <div className="container">
        <header>
          <h1>ZMovie Database</h1>
          <Navbar />
        </header>
        <div className="search-box">
          <input
            value={query}
            type="text"
            id="search"
            autofocus
            placeholder="Type a movie name..."
            onChange={queryHandler}
          />
        </div>
        <MovieList />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
