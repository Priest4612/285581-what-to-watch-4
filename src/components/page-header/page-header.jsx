import React from 'react';
import PropTypes from 'prop-types';

import UserBlock from '../user-block/user-block.jsx';


const PageHeader = (props) => {
  const {avatarImg} = props;

  return (
    <React.Fragment>
      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <UserBlock avatarImg={avatarImg}/>
      </header>
    </React.Fragment>
  );
};

PageHeader.propTypes = {
  avatarImg: PropTypes.string.isRequired,
};

export default PageHeader;
