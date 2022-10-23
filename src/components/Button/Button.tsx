import React, { ReactElement } from 'react';
import { ButtonProps } from './Button.props';
import { ButtonStyles } from './Button.styles';

export function Button({ children, ...props }: ButtonProps): ReactElement {
  return <button style={ButtonStyles} {...props}>{children}</button>
}