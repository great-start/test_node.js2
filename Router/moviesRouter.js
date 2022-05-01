import {Router} from 'express';
import {movieController} from '../controllers/moviesController.js';

export const moviesRouter = Router();

moviesRouter.get('/movies', movieController.getAllMovies);
moviesRouter.get('/movies/:id', movieController.getOneMovie);
moviesRouter.post('/movies', movieController.createMovie);
moviesRouter.put('/movies/:id', movieController.updateMovie);
moviesRouter.delete('/movies/:id', movieController.deleteMovie);
