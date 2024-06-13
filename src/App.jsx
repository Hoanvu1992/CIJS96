import { useState } from "react";
import Explore from "./Components/Explore";
import NewRelease from "./Components/NewRelease";
import { movieList } from "./Data/Data.js";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const movies = movieList.data;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <div className="container-none bg-black">
      <Navbar />
      <Explore movie={selectedMovie} />
      <NewRelease movies={movies} onMovieClick={handleMovieClick} />
    </div>
  );
};

export default App;
