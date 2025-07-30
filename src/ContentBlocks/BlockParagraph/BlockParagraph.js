import React, { PropTypes } from 'react';
import Markdown from 'grommet/components/Markdown';
import Box from "grommet/components/Box";
import unescape from 'unescape';
import { sizing } from './sizing';
import { ScrollableBox } from './styles';

export default function BlockParagraph({ scrollable, scrollableHeight, content, align, paragraphSize, paragraphColor }) {
  const markdownContent = unescape(content || '');
  const textSize = paragraphSize || 'medium';
  let color;
  if (paragraphColor === "light") {
    color = "#7D8A92";
  } else if (paragraphColor === "dark") {
    color = "#000000"
  } else {
    color = "inherit"
  }
  const markdownComponents = sizing(textSize, align, color);
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
  paragraphColor: PropTypes.oneOf([
    'light',
    'normal',
    'dark',
  ]),
};

BlockParagraph.defaultProps = {
  align: 'start',
};
