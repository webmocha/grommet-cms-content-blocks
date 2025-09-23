import React, { PropTypes } from 'react';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import unescape from 'unescape';
import ConditionalIcon from '../Shared/ConditionalIcon';

export default function BlockHeading({ content, strong, size, icon }) {
  const strongProp = strong ? strong === 'True' : false;
  const sizeProp = size ? size.toLowerCase() : 'medium';
  const unescapedContent = unescape(content || '');
  const headlineProps = {
    size: sizeProp,
    strong: strongProp,
  };
  
  const iconElement = <ConditionalIcon icon={icon} />;

  return (
    <Box direction="row" align="start" gap="small">
      <Box pad={{ vertical: 'small' }}>
        {iconElement}
      </Box>
      <Headline {...headlineProps}>
        {unescapedContent}
      </Headline>
    </Box>
  );
}

BlockHeading.propTypes = {
  content: PropTypes.string,
  strong: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.string,
};
