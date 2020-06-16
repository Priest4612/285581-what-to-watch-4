import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app.jsx';

const moveDetails = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014,
};

ReactDOM.render(
    <App
      moveDetails={moveDetails}
    />,
    document.querySelector(`#root`)
);
