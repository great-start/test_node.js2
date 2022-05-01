import {moviesModel} from '../models/moviesModel.js';

class MovieService {
    async createMovie (post, picture) {
        const postToCreate = {...post, picture};
        return await moviesModel.create(postToCreate);
    }

    async getAllMovies () {
        const movies = await moviesModel.find();
        return movies;
    }

    async getOneMovie (id) {
        const movie = await moviesModel.findById(id);
        return movie;
    }

    async updateMovie (movie) {

        if (!movie._id) {
            throw new Error('Id не указан');
        }
            // обноваляет в базе данных и возвращает новый объект (документ)
        const updatedMovie = await moviesModel.findByIdAndUpdate(movie._id, movie, {new: true});
        return updatedMovie;
    }

    async deleteMovie (id) {

        if (!id) {
            throw new Error('Id не указан');
        }

        const deletedMovie = await moviesModel.findByIdAndDelete(id, {new: true});
        return deletedMovie;
    }
}

export const movieService = new MovieService();