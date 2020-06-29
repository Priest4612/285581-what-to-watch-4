import React from 'react';
import PropTypes from 'prop-types';

const CatalogGenresItem = (props) => {
  const {id, genre} = props;


  return (
    <li
      className={`catalog__genres-item ${genre.active && `catalog__genres-item--active`}`}
      key={id}
    >
      <a href="#" className="catalog__genres-link">{genre.name}</a>
    </li>
  );
};


CatalogGenresItem.propTypes = {
  id: PropTypes.number.isRequired,
  genre: PropTypes.shape({
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CatalogGenresItem;
