import React from 'react';
import * as Icons from 'lucide-react';

const IconRenderer = ({ name, ...props }) => {
  const Icon = Icons[name] || Icons.HelpCircle;
  return <Icon {...props} />;
};

export default IconRenderer;
