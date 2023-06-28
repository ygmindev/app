import isFunction from 'lodash/isFunction';
import { cloneElement, type ReactElement, useState } from 'react';

import { _isHoverable } from '#lib-frontend/core/components/Activatable/_isHoverable';
import type { ActivatablePropsModel } from '#lib-frontend/core/components/Activatable/Activatable.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import type { CallableModel } from '#lib-shared/core/core.models';

export const Activatable: SFCModel<ActivatablePropsModel> = ({
  children,
  isHoverable = true,
  isPressable = true,
  onActive,
  onInactive,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const [isActive, isActiveSet] = useState<boolean>();
  const childrenF: ReactElement<PressablePropsModel> | undefined = isFunction(children)
    ? children(isActive)
    : children;

  const handleToggle = (value?: boolean): void => {
    isFunction(children) && isActiveSet(value || false);
    value ? onActive && onActive() : onInactive && onInactive();
  };

  const handleGrant = (): void => {
    const onPressIn = childrenF?.props.onPressIn as CallableModel;
    onPressIn && onPressIn();
    handleToggle(true);
  };

  const handleRelease = (): void => {
    const onPressOut = childrenF?.props.onPressOut as CallableModel;
    onPressOut && onPressOut();
    handleToggle(false);
  };

  return childrenF
    ? cloneElement(childrenF, {
        onMouseEnter: isHoverable
          ? () => (_isHoverable() ? handleToggle(true) : undefined)
          : undefined,
        onMouseLeave: isHoverable ? () => handleToggle(false) : undefined,
        onPressIn: isPressable ? handleGrant : undefined,
        onPressOut: isPressable ? handleRelease : undefined,
        onResponderGrant: isPressable ? handleGrant : undefined,
        onResponderRelease: isPressable ? handleRelease : undefined,
        style: { ...childrenF.props.style, ...styles },
      })
    : null;
};
