import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import UserBlockAvatar from '../user-block-avatar/user-block-avatar.jsx';
import UserBlockLink from '../user-block-link/user-block-link.jsx';


class UserBlock extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      userViewMode: `link`,
    };
  }

  _renderUserBlock() {
    const {avatarImg} = this.props;

    switch (this.state.userViewMode) {
      case `avatar`:
        return (
          <UserBlockAvatar
            avatarImg={avatarImg}
          />
        );

      case `link`:
        return (
          <UserBlockLink />
        );
    }

    return null;
  }

  render() {
    return (
      <div className="user-block">
        {this._renderUserBlock()}
      </div>
    );
  }
}


UserBlock.propTypes = {
  avatarImg: PropTypes.string.isRequired,
};

export default UserBlock;
