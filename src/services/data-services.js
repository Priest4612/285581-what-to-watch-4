import movies from '../mocks/films-mock.json';
import genres from '../mocks/genres-mock.json';


const getGenres = () => {
  return new Promise((resolve) => {
    resolve(genres);
  });
};

const getMovies = () => {
  return new Promise((resolve) => {
    resolve(movies);
  });
};


export {getGenres, getMovies};
