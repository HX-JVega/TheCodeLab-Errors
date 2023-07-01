const { ClientError } = require("../utils/errors");

const data = [
  {
    id: 1,
    title: "Titanic",
  },
  {
    id: 2,
    title: "Interestrellar",
  },
  {
    id: 3,
    title: "Misión Imposible",
  },
];

const getAllMovies = async () => {
  return data;
};

const getMovieById = async (id) => {
  const movie = data.find((e) => e.id == id);
  if (!movie) throw new ClientError("Invalid ID", 400);
  return movie;
};

const getMoviesByName = async (name) => {
  const movies = data.filter((e) => e.title == name);
  console.log(movies);
  return movies;
};

module.exports = {
  getAllMovies,
  getMovieById,
  getMoviesByName,
};
