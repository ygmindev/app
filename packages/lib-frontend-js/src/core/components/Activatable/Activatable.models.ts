import { type ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type ChildPropsModel } from '@lib/frontend/core/core.models';
import { type ReactElement } from 'react';

export type ActivatablePropsModel = {
  trigger?: ACTIVATABLE_TRIGGER;
  onActive?(): void;
  onHoverIn?(): void;
  onHoverOut?(): void;
  onInactive?(): void;
} & ChildPropsModel<
  ReactElement<PressablePropsModel> | ((isActive?: boolean) => ReactElement<PressablePropsModel>)
>;

export type ActivatableRefModel = {
  press: PressablePropsModel['onPress'];
  pressIn: PressablePropsModel['onPressIn'];
  pressOut: PressablePropsModel['onPressOut'];
};
