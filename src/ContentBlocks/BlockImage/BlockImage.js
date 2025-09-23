import React, { PropTypes } from 'react';
import unescape from 'unescape';
import { BlockParagraph } from '../BlockParagraph';
import colorMap from './colorMap';
import Div from './div';
import Image from './image';
import ConditionalIcon from '../Shared/ConditionalIcon';


export default function BlockImage({ content, alt, image, borderColor, link, title, icon }) {
  const unescapedContent = unescape(content || '');
  const caption = (unescapedContent && unescapedContent !== '')
    ? <BlockParagraph content={content} />
    : '';
  const iconElement = <ConditionalIcon icon={icon} />;
  const heading = iconElement || (title ? <BlockParagraph content={title} /> : '');
  const path = image && image.path ? image.path : '';
  const color = (borderColor && borderColor !== 'none') ? colorMap[borderColor] : '';
  if (path === '') {
    return null;
  }
  return (
    <Div>
      {heading ? <div style={{ marginBottom: 24, height: '32px' }}>{heading}</div> : null}
      {
        link ?
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Image
              caption={unescapedContent}
              color={color}
              src={path}
              alt={alt}
            />
          </a> :
          <Image
            caption={unescapedContent}
            color={color}
            src={path}
            alt={alt}
          />
      }
      {caption}
    </Div>
  );
}

BlockImage.propTypes = {
  content: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
  image: PropTypes.shape({
    path: PropTypes.string,
  }),
  borderColor: PropTypes.oneOf([
    'none',
    'red',
    'green',
  ]),
  title: PropTypes.string,
  icon: PropTypes.string,
};

