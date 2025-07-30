import React, { PropTypes } from 'react';
import Markdown from 'grommet/components/Markdown';
import Box from 'grommet/components/Box';
import unescape from 'unescape';
import { sizing } from './sizing';
import { ScrollableBox } from './styles';
import IconPicker from '../BlockButton/iconPicker';
import IconSpan from '../BlockImage/iconSpan';
import colorMap from '../BlockImage/colorMap';

export default function BlockParagraph({
  scrollable,
  scrollableHeight,
  content,
  align,
  paragraphSize,
  icon,
}) {
  const markdownContent = unescape(content || '');
  const textSize = paragraphSize || 'medium';
  const markdownComponents = sizing(textSize, align);
  
  const iconElement = icon && icon !== 'none' 
    ? ['do', 'doNot', 'limitedUse'].includes(icon)
      ? <IconSpan color={colorMap[icon]}><IconPicker icon={icon} /></IconSpan>
      : <IconPicker icon={icon} />
    : null;

  if (scrollable === 'yes') {
    return (
      <ScrollableBox size={{ height: scrollableHeight, width: 'inherit' }}>
        {iconElement}
        <Markdown
          content={markdownContent}
          components={markdownComponents}
        />
      </ScrollableBox>
    );
  }
  return (
    <Box>
      {iconElement}
      <Markdown
        content={markdownContent}
        components={markdownComponents}
      />
    </Box>
  );
}

BlockParagraph.propTypes = {
  content: PropTypes.string,
  align: PropTypes.oneOf([
    'start',
    'center',
    'end',
  ]),
  scrollable: PropTypes.oneOf([
    'no',
    'yes',
  ]),
  scrollableHeight: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  paragraphSize: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
  icon: PropTypes.string,
};

BlockParagraph.defaultProps = {
  align: 'start',
};
