import Card from "./Card";

const ParentCard = ({ movieName, img, episode }) => {
  return (
    <div>
      <Card>
        <img src={img} alt="" />
        <h1 className="text-white">{movieName}</h1>
        <p className="text-white">{episode}</p>
      </Card>
    </div>
  );
};

export default ParentCard;
