import "./NewRelease.css";
const NewRelease = ({ movies, onMovieClick }) => {
  return (
    <div className="text-white">
      <h1 className="text-3xl font-bold mx-36 my-10">New Release</h1>
      <div className="flex justify-center align-content-center gap-5">
        {movies.map((item) => (
          <div
            key={item.id}
            onClick={() => onMovieClick(item)}
            className="w-40"
          >
            <div className="relative">
              <img className="w-40 h-60" src={item.image} alt="" />
              <div className="blur-overlay"></div>
              <p
                className="text-center absolute bottom-0 right-0 left-0"
                style={{ color: "#7A7B7B" }}
              >
                {item.episode}
              </p>
            </div>
            <h1 className="text-center">{item.movieName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewRelease;
