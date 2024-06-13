const Navbar = ({ movieName, img, episode }) => {
  return (
    <div className="flex justify-around content-center py-5 text-center">
      <h1 className="text-4xl font-bold" style={{ color: "white" }}>
        Anonime
      </h1>
      <p className="navbar-p pt-2" style={{ color: "#7A7B7B" }}>
        Home
      </p>
      <p className="navbar-p pt-2" style={{ color: "#7A7B7B" }}>
        List anime
      </p>
      <input
        className="w-1/6 py-1 rounded-full ps-3"
        type="text"
        placeholder="Search anime or movie"
        style={{ backgroundColor: "#374151" }}
      />
    </div>
  );
};

export default Navbar;
