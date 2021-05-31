import React from 'react';
import { Button } from './index.js';

export default {
  title: 'Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  primaryColor: '#4a90e2'
};