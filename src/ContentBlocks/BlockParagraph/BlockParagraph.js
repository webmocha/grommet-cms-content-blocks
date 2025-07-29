import React, { PropTypes } from 'react';
import Markdown from 'grommet/components/Markdown';
import Box from "grommet/components/Box";
import unescape from 'unescape';
import { sizing } from './sizing';
import { ScrollableBox } from './styles';

export default function BlockParagraph({ scrollable, scrollableHeight, content, align, paragraphSize }) {
  const markdownContent = unescape(content || '');
  const textSize = paragraphSize || 'medium';
  const markdownComponents = sizing(textSize, align);
  if (scrollable === "yes") {
    return (
      <ScrollableBox size={{ height: scrollableHeight, width: 'inherit' }}>
        <Markdown
          content={markdownContent}
          components={markdownComponents}
        />
      </ScrollableBox>
    )
  }
  return (
    <Markdown
      content={markdownContent}
      components={markdownComponents}
    />
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
    "no",
    "yes"
  ]),
  scrollableHeight: PropTypes.oneOf([
    "small",
    "medium",
    "large"
  ]),
  paragraphSize: PropTypes.oneOf([
    'small',
    'medium',
    'large',
  ]),
};

BlockParagraph.defaultProps = {
  align: 'start',
};
