import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import App from './components/app/app.jsx';
import {store} from './store.js';

import genresMock from './mocks/genres-mock.json';

ReactDOM.render(
    <Provider store = {store}>
      <App
        genres={genresMock}
      />
    </Provider>,
    document.querySelector(`#root`)
);
