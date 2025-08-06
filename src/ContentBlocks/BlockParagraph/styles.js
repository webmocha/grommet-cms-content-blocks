import styled from "styled-components";
import Box from "grommet/components/Box";

export const ScrollableBox = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: start;
  overflow-y: scroll;
`;