import React from 'react';
import { Card } from './index.js';


export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const DefaultCard = Template.bind({});
DefaultCard.args = {
  width: '368px',
  heigh: '462px',
  FontFamily: `'Popins', sans-serif`,
  TitleColor: '#3E4D60',
  TextColor: '#8C94A8'
};