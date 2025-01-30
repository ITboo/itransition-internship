import { useEffect, useState } from "react";
import CardList from "../widgets/CardList";

const Main = () => {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const getRooms = async () => {
      await fetch(`http://localhost:8080/rooms`)
        .then(async (response) => await response.json())
        .then((data) => setRooms(data))
        .catch((error) => console.error("Error fetching:", error));
    };

    getRooms();
  }, []);


  

  return (
    <main>
      <h1>Помоги в создании презентации</h1>
      <CardList rooms={rooms} />
      <h2>Или начни создавать новую</h2>
      <button>Создать</button>
    </main>
  );
};

export default Main;
