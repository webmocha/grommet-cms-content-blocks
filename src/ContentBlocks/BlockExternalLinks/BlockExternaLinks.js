import React, { PropTypes } from "react";
import Box from "grommet/components/Box";
import Paragraph from "grommet/components/Paragraph";
import { StyledBox, StyledAnchor, StyledHeading } from "./styles";

export default function BlockExternaLinks({ links }) {
  return (
    <Box pad="medium" size="medium">
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
    </Box>
  );
}

BlockExternaLinks.propTypes = {
  content: PropTypes.string,
};
