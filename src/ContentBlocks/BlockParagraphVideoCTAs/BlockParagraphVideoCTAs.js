// @flow
import React from 'react';
import Box from 'grommet/components/Box';
import { BlockVideoButton } from '../BlockVideoButton';
import { BlockParagraph } from '../BlockParagraph';
import { BlockContainer, CTABox } from '../BlockParagraphCTAs/styles';
import uuid from '../Shared/uuid';

type VideoCta = {
  label: string,
  video: {
    path: string,
    title?: string,
  },
  buttonType: 'Anchor' | 'Button',
  primary: 'True' | 'False',
  icon?: string,
}

type Props = {
  content: ?string,
  paragraphSize?: string,
  ctaArray: ?Array<VideoCta>,
}

export default function BlockParagraphVideoCTAs({
  content,
  paragraphSize,
  ctaArray,
}: Props) {
  const length = ctaArray && ctaArray.length > 0 ? ctaArray.length : 0;
  const ctaArrayNodes = ctaArray && ctaArray.length > 0
    && ctaArray.map((cta, i) => (
      <CTABox key={uuid()} isLastElement={i === length - 1} pad="none" margin="none">
        <BlockVideoButton {...cta} />
      </CTABox>
    ));
  const size = paragraphSize || 'medium';
  return (
    <BlockContainer id="block--block-paragraph-video-ctas">
      {content &&
        <BlockParagraph
          content={content}
          align="start"
          paragraphSize={size}
        />
      }
      { ctaArray && ctaArray.length > 0 &&
        <Box style={{ paddingTop: '12px' }}>
          {ctaArrayNodes}
        </Box>
      }
    </BlockContainer>
  );
}