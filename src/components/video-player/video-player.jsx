import React, {PureComponent, createRef} from 'react';
import PropTypes from 'prop-types';


class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);

    this._videoRef = createRef();

    this.state = {
      isPlaying: this.props.isPlaying,
    };
  }

  componentDidMount() {
    const {src, isMuted} = this.props;
    const video = this._videoRef.current;

    if (video) {
      video.src = src;
      video.muted = isMuted;
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;

    if (video) {
      video.onplay = null;
      video.muted = null;
      video.src = ``;
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;

    if (video) {
      if (this.props.isPlaying) {
        video.play();
      } else {
        video.load();
      }
    }
  }

  render() {
    const {poster, src, isPlaying, isMuted} = this.props;

    return (
      <React.Fragment>
        <video
          className="player__video"
          poster={poster}
          src={src}
          autoPlay={isPlaying}
          muted={isMuted}
        />
      </React.Fragment>
    );
  }
}


VideoPlayer.propTypes = {
  poster: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  isMuted: PropTypes.bool.isRequired,
  isPlaying: PropTypes.bool.isRequired,
};


export default VideoPlayer;
