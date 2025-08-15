import styled from "styled-components";
import Box from "grommet/components/Box";
import Anchor from "grommet/components/Anchor";
import Heading from "grommet/components/Heading";

export const StyledContainer = styled(Box)`
  overflow-y: scroll;
  width: 100%;
  height: 475px;
`;

export const StyledBox = styled(Box)`
  padding: 4px 0px 4px 24px;
  border-left: 1px solid #ccc;
`;

export const StyledAnchor = styled(Anchor)`
  text-decoration: none;
`;
