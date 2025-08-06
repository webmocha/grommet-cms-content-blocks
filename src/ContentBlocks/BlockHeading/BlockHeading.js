import React, { PropTypes } from 'react';
import Headline from 'grommet/components/Headline';
import Box from 'grommet/components/Box';
import unescape from 'unescape';
import IconPicker from '../BlockButton/iconPicker';
import IconSpan from '../BlockImage/iconSpan';
import colorMap from '../BlockImage/colorMap';

export default function BlockHeading({ content, strong, size, icon }) {
  const strongProp = strong ? strong === 'True' : false;
  const sizeProp = size ? size.toLowerCase() : 'medium';
  const unescapedContent = unescape(content || '');
  const headlineProps = {
    size: sizeProp,
    strong: strongProp,
  };
  
  const iconElement = icon && icon !== 'none'
    ? (['do', 'doNot', 'limitedUse'].includes(icon)
      ? <IconSpan color={colorMap[icon]}><IconPicker icon={icon} /></IconSpan>
      : <IconPicker icon={icon} />)
    : null;

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
