import React from 'react';
import PropTypes from 'prop-types';


const UserBlockAvatar = (props) => {
  const {avatarImg} = props;

  return (
    <div className="user-block__avatar">
      <img src={avatarImg} alt="User avatar" width="63" height="63" />
    </div>
  );
};


UserBlockAvatar.propTypes = {
  avatarImg: PropTypes.string.isRequired,
};

export default UserBlockAvatar;
