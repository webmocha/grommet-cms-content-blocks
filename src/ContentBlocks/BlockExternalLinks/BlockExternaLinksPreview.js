import React, { PropTypes } from "react";
import Paragraph from "grommet/components/Paragraph";
import { StyledAnchor, StyledBox } from "./styles";

export default function BlockExternaLinksPreview({ links}) {
  return (
    <StyledBox>
      <StyledAnchor textDecoration="none" href={links[0].href}>
        <Paragraph margin="none">
          <b>{links[0].label}</b>
        </Paragraph>
      </StyledAnchor>
    </StyledBox>
  )
}

BlockExternaLinksPreview.propTypes = {
  content: PropTypes.string,
};
