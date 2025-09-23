import React from 'react';
import { PropTypes } from 'prop-types';
import IconPicker from '../BlockButton/iconPicker';
import IconSpan from '../BlockImage/iconSpan';
import colorMap from '../BlockImage/colorMap';

export default function ConditionalIcon({ icon }) {
  if (!icon || icon === 'none') {
    return null;
  }

  const isColoredIcon = ['do', 'doNot', 'limitedUse'].includes(icon);
  
  if (isColoredIcon) {
    return (
      <IconSpan color={colorMap[icon]}>
        <IconPicker icon={icon} />
      </IconSpan>
    );
  }

  return <IconPicker icon={icon} />;
}

ConditionalIcon.propTypes = {
  icon: PropTypes.string,
};

ConditionalIcon.defaultProps = {
  icon: null,
};
