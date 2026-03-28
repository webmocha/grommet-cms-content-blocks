/* @flow */
import React from 'react';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import styled from 'styled-components';
import type { AssetType, ButtonType, IconType } from './BlockButtonForm';
import { getAnalyticsType, getLink } from './utils';
import IconPicker from './iconPicker';

const colorMap = {
  black: '#333333',
  white: '#ffffff',
  green: '#00a982',
};

const StyledButtonWrapper = styled.div`
  button.grommetux-button {
    border-color: ${props => colorMap[props.buttonColor] || colorMap.black};
    color: ${props => colorMap[props.buttonColor] || colorMap.black};
  }
`;

export type Props = {
  label?: string,
  path?: string,
  href?: string,
  assetType: AssetType,
  buttonType?: ButtonType,
  primary?: boolean,
  icon?: IconType,
  buttonColor?: string,
}
export default function BlockButton({
  buttonType = 'Button',
  href,
  path,
  label,
  primary = 'False',
  assetType,
  icon,
  buttonColor = 'black',
}: Props) {
  const isPrimary = primary === 'True';
  const link = getLink(assetType, path, href);
  const tracking = {
    'data-analytics-track': 'true',
    'data-analytics-value': assetType === 'path' ? path : href,
    'data-analytics-type': getAnalyticsType(assetType, path, href),
    'data-analytics-category': buttonType,
  };
  let props = { label, primary: isPrimary, target: '_blank', ...tracking, ...link };
  if (buttonType === 'Button') {
    return (
      <StyledButtonWrapper buttonColor={buttonColor}>
        <Button {...props} />
      </StyledButtonWrapper>
    );
  } else if (buttonType === 'Anchor') {
    if (icon && isPrimary) {
      props = {
        ...props,
        icon: <IconPicker icon={icon} />,
      };
    }
    return (
      <div>
        <Anchor {...props} />
      </div>
    );
  }
}
