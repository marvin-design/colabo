const book = {
  title: "Kalanak academy",
  Author: {
    firstName: "Edwin",
    lastName: "Kaiiru",
    age: 36,
    isPublished: true,
  },
};
console.log(book.title);
console.log(book.Author.firstName);

const colors = ["blue", "black", "white", "grey", "red"];
console.log(colors);
console.log(colors[0]);
console.log(colors[2]);
console.log(colors[4]);

const library = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    isPublished: true,
    pages: 281,
  },
  {
    title: "1984",
    author: "George Orwell",
    isPublished: true,
    pages: 328,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    isPublished: false,
    pages: 180,
  },
];
console.log(library[1].title);
console.log(library[2].author);
