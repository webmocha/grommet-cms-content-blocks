import React from 'react';
import Box from 'grommet/components/Box';

export default function BlockParagraphVideoCTAsWireframe() {
  return (
    <Box pad={{ between: 'small' }}>
      <Box full="horizontal" pad="small" colorIndex="light-2" />
      <Box full="horizontal" pad="small" colorIndex="light-2" />
      <Box full="horizontal" pad="small" colorIndex="light-2" />
      <Box full="horizontal" pad="small" colorIndex="brand" />
    </Box>
  );
}