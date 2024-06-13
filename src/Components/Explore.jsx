import "./Explore.css";
const Explore = ({ movie }) => {
  return (
    <div className="text-white mx-36 relative">
      <h1 className="text-3xl font-bold">Explore</h1>
      <p className="my-7 text-lg" style={{ color: "#7A7B7B" }}>
        What are you gonna watch today ?
      </p>
      <img src={movie.image} alt="" style={{ height: "500px" }} />
      <div className="blur-overlay-explore"></div>
      <div className="absolute bottom-10 left-10">
        <h2 className="text-4xl mb-5">{movie.movieName}</h2>
        <p className="w-1/2">{movie.description}</p>
      </div>
    </div>
  );
};

export default Explore;
