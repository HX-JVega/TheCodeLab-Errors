const { moviesService } = require("../services");
const { catchedAsync } = require("../utils");
const { response } = require("../utils");

const getMovies = async (req, res) => {
  const { name } = req.query;
  const movies = name
    ? await moviesService.getMoviesByName(name)
    : await moviesService.getAllMovies();
  console.log("estoy acá");
  response(res, 200, movies);
};

const getMovieById = async (req, res) => {
  const { id } = req.params;
  const movie = await moviesService.getMovieById(id);
  response(res, 200, movie);
};

module.exports = {
  getMovies: catchedAsync(getMovies),
  getMovieById: catchedAsync(getMovieById),
};

// router =>  controller => service => datos
//                             ↑
