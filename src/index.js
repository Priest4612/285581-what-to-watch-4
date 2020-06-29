import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import filmsMock from './mock/films-mock.json';
import genresMock from './mock/genres-mock.json';


const moveDetails = filmsMock[17];
const movies = filmsMock;
const genres = genresMock;

ReactDOM.render(
    <App
      moveDetails={moveDetails}
      movies={movies}
      genres={genres}
    />,
    document.querySelector(`#root`)
);
