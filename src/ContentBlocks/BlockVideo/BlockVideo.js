import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import { VideoCallout, VideoLayer } from '../Shared';
import ConditionalIcon from '../Shared/ConditionalIcon';

export default class BlockVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layerActive: false,
    };

    this.toggleVideoLayer = this.toggleVideoLayer.bind(this);
  }

  toggleVideoLayer() {
    this.setState({
      layerActive: !this.state.layerActive,
    });
  }

  render() {
    const { content, image, label, video, borderColor, icon } = this.props;
    const iconElement = <ConditionalIcon icon={icon} />;
    const videoLayer = (this.state.layerActive)
      ? (
        <VideoLayer
          image={image}
          video={video}
          onClose={this.toggleVideoLayer}
        />
        )
      : null;

    return (
      <Box>
        <Box align="start" pad={{ vertical: 'small' }}>
        {iconElement}
        </Box>
        {videoLayer}
          <VideoCallout
            borderColor={borderColor}
            video={video}
            description={content}
            label={label}
            thumbnail={image.path}
            onClick={this.toggleVideoLayer}
          />
      </Box>
    );
  }
}

BlockVideo.propTypes = {
  content: PropTypes.string,
  borderColor: PropTypes.string,
  image: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
  label: PropTypes.string,
  video: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }),
  icon: PropTypes.string,
};
