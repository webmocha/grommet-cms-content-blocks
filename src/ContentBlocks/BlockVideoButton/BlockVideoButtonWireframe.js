import React from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';

export default function BlockVideoButtonWireframe() {
  return (
    <Box pad={{ between: 'small' }}>
      <Button primary style={{ whiteSpace: 'nowrap', padding: '6px 6px' }} label="Video Button" onClick={e => e} />
    </Box>
  );
}