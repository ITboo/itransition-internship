function createData(id, isbn, title, author, publisher,likes=0, reviews=[]) {
  return {
    id,
    isbn,
    title,
    author,
    publisher,
    likes,
    reviews: [
      {
        date: "2020-01-05",

        text: 'Awesome'
      },
      {
        date: "2020-01-02",

        text: 'Terrible'
      },
    ],
  };
}
export const rows = [
  createData(1, 111, "Porry Gatter", "R. Gowling", "Blah"),
  createData(2, 112, "Porry Gatter", "R. Gowling", "Blah"),
  createData(3, 113, "Porry Gatter", "R. Gowling", "Blah"),
  createData(4, 114, "Porry Gatter", "R. Gowling", "Blah"),
  createData(5, 115, "Porry Gatter", "R. Gowling", "Blah"),
  createData(1, 111, "Porry Gatter", "R. Gowling", "Blah"),
  createData(2, 112, "Porry Gatter", "R. Gowling", "Blah"),
  createData(3, 113, "Porry Gatter", "R. Gowling", "Blah"),
  createData(4, 114, "Porry Gatter", "R. Gowling", "Blah"),
  createData(5, 115, "Porry Gatter", "R. Gowling", "Blah"),
  createData(1, 111, "Porry Gatter", "R. Gowling", "Blah"),
  createData(2, 112, "Porry Gatter", "R. Gowling", "Blah"),
  createData(3, 113, "Porry Gatter", "R. Gowling", "Blah"),
  createData(4, 114, "Porry Gatter", "R. Gowling", "Blah"),
  createData(5, 115, "Porry Gatter", "R. Gowling", "Blah"),
];
