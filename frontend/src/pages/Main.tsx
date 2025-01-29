import CardList from "../widgets/CardList";

const rooms = [
  { id: 1, title: "1" },
  { id: 2, title: "2" },
  { id: 3, title: "3" },
];

const Main = () => {
  return(
  <main>
  <h1>Помоги в создании презентации</h1>
  <CardList rooms={rooms} />
  <h2>Или начни создавать новую</h2>
  <button>Создать</button>
  </main>)
};

export default Main;
