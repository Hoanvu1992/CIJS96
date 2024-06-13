import { useState } from "react";
import Explore from "./Components/Explore";
import NewRelease from "./Components/NewRelease";
import { movieList } from "./Data/Data.js";
import Navbar from "./Components/Navbar.jsx";

const App = () => {
  const movies = movieList.data;
  const [selectedMovie, setSelectedMovie] = useState(movieList.data[0]);

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
