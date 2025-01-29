import { faker } from "@faker-js/faker";
const generateReview = () => {
  return { reviewer: faker.person.fullName(), text: faker.lorem.sentence() };
};
export const generateBook = (count) => {
  let id = 0;
  return {
    id: id,
    isbn: faker.commerce.isbn(),
    author: faker.book.author(),
    title: faker.book.title(),
    publisher: faker.book.publisher(),
    likes: Math.floor(Math.random() * 100) / 10,
    reviews: Array.from(
      { length: Math.floor(Math.random() * 10) },
      generateReview
    ),
    coverUrl: faker.image.urlLoremFlickr({ width: 200, height: 150}),
  };
};
export const generateBooks = (count = 5) => {
  return Array.from({ length: count }, generateBook);
};
