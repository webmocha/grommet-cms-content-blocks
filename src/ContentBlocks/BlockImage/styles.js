// @flow
import { css } from 'styled-components';

export const imageStyles = (color: ?string, caption: ?string) => {
  const imageCss = css`
    width: 100%;
    height: auto;
  `;
  if (color !== '') {
    return css`
      border-bottom: 9px solid ${color};
      margin-bottom: 12px;
      ${imageCss}
    `;
  }
  if (caption) {
    return css`
      margin-bottom: 12px;
      ${imageCss}
    `;
  }
  return imageCss;
};

export const divStyles = css`
  @media all and (-ms-high-contrast:none) {
    height: 100%;
  }
`;

export const spanStyles = (color) => css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${color || '#eee'};
  margin-bottom: 8px;
  & > svg {
  fill: #fff;
  stroke: #fff;
}
`;