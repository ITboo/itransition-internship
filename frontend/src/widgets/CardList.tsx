import Card from "../shared/Card";
import './CardList.css'
const CardList = ({ rooms }) => {
  return (
    <div className="cardlist">
      {rooms.map((room) => (
        <Card room={room} />
      ))}
    </div>
  );
};

export default CardList;
