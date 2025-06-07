import { _isHoverable } from '@lib/frontend/core/components/Activatable/_isHoverable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import {
  type ActivatablePropsModel,
  type ActivatableRefModel,
} from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type RSFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import isFunction from 'lodash/isFunction';
import { cloneElement, type ReactElement, useImperativeHandle, useState } from 'react';

export const Activatable: RSFCModel<ActivatableRefModel, ActivatablePropsModel> = ({
  children,
  onActive,
  onHoverIn,
  onHoverOut,
  onInactive,
  ref,
  trigger = ACTIVATABLE_TRIGGER.HOVER,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const [isActive, isActiveSet] = useState<boolean>(false);
  const childrenF: ReactElement<PressablePropsModel> | undefined | null = isFunction(children)
    ? children(isActive)
    : children;

  const handleToggle = (value?: boolean): void => {
    isActiveSet(value ?? false);
    value ? onActive?.() : onInactive?.();
  };

  const handleHover = (value?: boolean): void => {
    value ? onHoverIn?.() : onHoverOut?.();
    handleToggle(value);
  };

  const handlePress = (): void => {
    const { onPress } = childrenF?.props as PressablePropsModel;
    void onPress?.();
    handleToggle(!isActive);
  };

  const handlePressIn = (): void => {
    const { onPressIn } = childrenF?.props as PressablePropsModel;
    void onPressIn?.();
    handleToggle(true);
  };

  const handlePressOut = (): void => {
    const { onPressOut } = childrenF?.props as PressablePropsModel;
    void onPressOut?.();
    handleToggle(false);
  };

  useImperativeHandle(ref, () => ({
    press: handlePress,
    pressIn: handlePressIn,
    pressOut: handlePressOut,
  }));

  const triggerProps: PressablePropsModel = (() => {
    switch (trigger) {
      case ACTIVATABLE_TRIGGER.HOVER:
        return _isHoverable()
          ? { onMouseEnter: () => handleHover(true), onMouseLeave: () => handleHover(false) }
          : {};
      case ACTIVATABLE_TRIGGER.FOCUS:
        return {
          onPressIn: handlePressIn,
          onPressOut: handlePressOut,
          onResponderGrant: handlePressIn,
          onResponderRelease: handlePressOut,
        };
      case ACTIVATABLE_TRIGGER.PRESS:
        return { onPress: handlePress };
      default:
        return {};
    }
  })();

  return childrenF
    ? cloneElement(childrenF, {
        ...triggerProps,
        // TODO: fix typing
        style: { ...childrenF.props.style, ...styles } as ViewStyleModel,
      })
    : childrenF || null;
};
