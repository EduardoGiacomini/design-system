import { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ButtonProps } from './Button.props';

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
