/* @flow */
import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import type { ButtonType, Primary, IconType } from './BlockVideoButtonForm';
import { VideoLayer } from '../Shared';
import IconPicker from '../BlockButton/iconPicker';

export type Props = {
  label?: string,
  buttonType?: ButtonType,
  primary?: Primary,
  icon?: IconType,
  video?: {
    path?: string,
    title?: string,
  },
}

export default class BlockVideoButton extends Component {
  constructor(props: Props) {
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
    const {
      buttonType = 'Button',
      label,
      primary = 'True',
      icon,
      video,
    } = this.props;

    const isPrimary = primary === 'True';
    const tracking = {
      'data-analytics-track': 'true',
      'data-analytics-value': video && video.path ? video.path : '',
      'data-analytics-type': 'Play',
      'data-analytics-category': 'VideoButton',
    };

    const videoLayer = (this.state.layerActive && video)
      ? (
        <VideoLayer
          video={video}
          onClose={this.toggleVideoLayer}
        />
        )
      : null;

    let props = {
      label,
      primary: isPrimary,
      onClick: this.toggleVideoLayer,
      ...tracking,
    };

    if (buttonType === 'Button') {
      return (
        <Box>
          {videoLayer}
          <Button {...props} />
        </Box>
      );
    } else if (buttonType === 'Anchor') {
      if (icon && isPrimary) {
        props = {
          ...props,
          icon: <IconPicker icon={icon} />,
        };
      }
      return (
        <Box>
          {videoLayer}
          <div>
            <Anchor {...props} />
          </div>
        </Box>
      );
    }
  }
}

BlockVideoButton.propTypes = {
  label: PropTypes.string,
  buttonType: PropTypes.oneOf(['Button', 'Anchor']),
  primary: PropTypes.oneOf(['True', 'False']),
  icon: PropTypes.string,
  video: PropTypes.shape({
    path: PropTypes.string,
    title: PropTypes.string,
  }),
};