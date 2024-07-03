import React from 'react';
import IcoMoon, { IconProps } from 'react-icomoon';
import iconSet from '/public/icomoon/selection.json'; // Adjust the path if needed

const Icon: React.FC<IconProps> = (props) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default Icon;
