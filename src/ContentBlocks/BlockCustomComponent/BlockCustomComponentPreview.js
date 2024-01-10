import React from 'react';
import PropTypes from 'prop-types';
import Box from 'grommet/components/Box';
import Markdown from 'grommet/components/Markdown';

const BlockCustomComponentPreview = ({ content }) => (
  <Box colorIndex="light-1" direction="row" pad={{ between: 'medium' }} >
    <Box>
      <Markdown
        content={content}
        components={{
          p: { props: { margin: 'none' } },
        }}
      />
    </Box>
  </Box>
);

BlockCustomComponentPreview.propTypes = {
  content: PropTypes.string.isRequired,
};

export default BlockCustomComponentPreview;
