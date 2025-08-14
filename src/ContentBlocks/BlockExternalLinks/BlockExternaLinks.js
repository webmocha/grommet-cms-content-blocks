import React, { PropTypes } from "react";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
import { StyledBox, StyledAnchor, StyledHeading, StyledContainer } from "./styles";

export default function BlockExternaLinks({ links }) {
  return (
    <StyledContainer pad="large">
      {links &&
        links.map(({ href, label }, index) => (
          <StyledBox>
            <StyledAnchor textDecoration="none" key={index} href={href}>
              <Paragraph margin="none">
                <b>{label}</b>
              </Paragraph>
            </StyledAnchor>
          </StyledBox>
        ))}
    </StyledContainer>
  );
}

BlockExternaLinks.propTypes = {
  content: PropTypes.string,
};
