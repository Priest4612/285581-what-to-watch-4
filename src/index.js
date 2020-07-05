import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.jsx';
import filmsMock from './mocks/films-mock.json';
import genresMock from './mocks/genres-mock.json';


ReactDOM.render(
    <App
      movies={filmsMock}
      genres={genresMock}
    />,
    document.querySelector(`#root`)
);
