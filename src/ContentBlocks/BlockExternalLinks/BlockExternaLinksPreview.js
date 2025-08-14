import React, { PropTypes } from "react";
import Headline from "grommet/components/Headline";

export default function BlockExternaLinksPreview({ content }) {
  return <Headline>{content}</Headline>;
}

BlockExternaLinksPreview.propTypes = {
  content: PropTypes.string,
};
