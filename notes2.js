const students = ["Matt", "Mark", "Josephine", "Thomas"];
console.log(students[3]);
students.forEach((student) => console.log(student));
//loops through each element
const movie = {
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
};

const movies = [
  { title: "Star Wars", release: 1977, actors: ["Mark", "Harrison", "Carrie"] },
  {
    title: "Star War",
    release: 1977,
    actors: ["Mark", "Harrison", "Carrie"],
  },
  {
    title: "Lion King",
    release: 1991,
    actors: ["Mark", "Harrison", "Carrie"],
  },
];
movies.forEach((movie) => console.log(movie.title));
//filter, to get a new array of movies that match criteria\
//array name DOT Array command then arrow function that accepts singular element of array
const newMovies = movies.filter((movie) => movie.release > 1990);
console.log(newMovies);
//also can do
movies
  .filter((movie) => movie.release > 1990)
  .forEach((movie) => console.log(movie));
