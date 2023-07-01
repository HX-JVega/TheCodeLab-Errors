const { Router } = require("express");
const { moviesController } = require("../controllers");
const validateName = require("../middlewares/validateName");

const router = Router();

router.get("/movies", validateName, moviesController.getMovies);
//                    ↑

router.get("/movies/:id", moviesController.getMovieById);

module.exports = router;
