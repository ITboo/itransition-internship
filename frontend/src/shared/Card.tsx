import { Link } from "react-router"
import './Card.css'

const Card = ({room}) => {
  return (
    <Link to={`/rooms/${room.id}`}>
      <div className="card">
        <h1>{room.title}</h1>
        </div>
    </Link>
  )
}

export default Card