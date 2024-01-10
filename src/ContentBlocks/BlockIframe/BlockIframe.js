import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';

const BlockIframe = ({ srcUrl, height }) => (
  <Box
    style={{
      height,
      margin: 'auto',
    }}
    full="horizontal"
    pad={{ horizontal: 'large', vertical: 'small' }}
    alignSelf="center"
  >
    <iframe
      src={srcUrl}
      height="100%"
      width="100%"
      sandbox="allow-same-origin allow-scripts allow-popups allow-downloads"
      seamless
      style={{ border: 'none' }}
    />
  </Box>
);

BlockIframe.propTypes = {
  srcUrl: PropTypes.string,
  height: PropTypes.string,
};

export default BlockIframe;