import { type ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { type ReactElement } from 'react';

export type ButtonGroupPropsModel = Omit<ButtonPropsModel, 'children' | 'onPress'> & {
  children: Array<ReactElement<ButtonPropsModel>>;
};
