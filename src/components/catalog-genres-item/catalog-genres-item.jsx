import React from 'react';
import PropTypes from 'prop-types';

const CatalogGenresItem = (props) => {
  const {id, name, active} = props.genre;


  return (
    <li
      className={`catalog__genres-item ${active && `catalog__genres-item--active`}`}
      key={id}
    >
      <a href="#" className="catalog__genres-link">{name}</a>
    </li>
  );
};


CatalogGenresItem.propTypes = {
  genre: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
};

export default CatalogGenresItem;
