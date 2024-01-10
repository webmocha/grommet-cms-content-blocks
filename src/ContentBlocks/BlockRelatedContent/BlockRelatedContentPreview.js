import React from 'react';
import PropTypes from 'prop-types';
import Headline from 'grommet/components/Headline';

export default function BlockRelatedContentPreview({ content }) {
  return <Headline>{content}</Headline>;
}

BlockRelatedContentPreview.propTypes = {
  content: PropTypes.string,
};
