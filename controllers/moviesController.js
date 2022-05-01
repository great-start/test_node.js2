

import {movieService} from '../services/movieService.js';
import {fileService} from '../services/fileService.js';

class MoviesController {
    async createMovie (req, res) {
        try {

            if (!req.files || Object.keys(req.files).length === 0) {
                return res.status(400).send('No files were uploaded.');
            }

            const picturePath = await fileService.saveFile(req.files.picture);

            const post = await movieService.createMovie(req.body, picturePath);

            res.send(post);
            // res.status(200).json('Get data from server');
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getAllMovies (req, res) {
        try {
            const movies = await movieService.getAllMovies();
            res.send(movies);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async getOneMovie (req, res) {
        try {
            const movie = await movieService.getOneMovie(req.params.id);
            res.send(movie);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async updateMovie (req, res) {
        try {

            // обноваляет в базе данных и возвращает новый объект (документ)
            const updatedMovie = await movieService.updateMovie(req.body);
            res.send(updatedMovie);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

    async deleteMovie (req, res) {
        try {
            const deletedMovie = await movieService.deleteMovie(req.params.id);
            res.send(deletedMovie);
        } catch (e) {
            res.status(500).json(e.message);
        }
    }

}

export const movieController = new MoviesController();