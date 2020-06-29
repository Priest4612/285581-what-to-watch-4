import React from 'react';
import PropTypes from 'prop-types';

import CatalogGenresItem from '../catalog-genres-item/catalog-genres-item.jsx';

const CatalogGenres = (props) => {
  const {genres} = props;

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre, index) =>
          <CatalogGenresItem
            key={index}
            id={index}
            genre={genre}
          />)
      }
    </ul>
  );
};

CatalogGenres.propTypes = {
  genres: PropTypes.array.isRequired,
};

export default CatalogGenres;
