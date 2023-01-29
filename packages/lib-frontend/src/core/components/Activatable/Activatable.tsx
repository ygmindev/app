import { _isHoverable } from '@lib/frontend/core/components/Activatable/_isHoverable';
import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { CallableModel } from '@lib/shared/core/core.models';
import { cloneElement } from 'react';

export const Activatable: FCModel<ActivatablePropsModel> = ({
  children,
  isHoverable = true,
  isPressable = true,
  onActive,
  onInactive,
}) => {
  const _handleToggle = (isActive?: boolean): void =>
    isActive ? onActive && onActive() : onInactive && onInactive();

  const _handleGrant = (): void => {
    const onPressIn = children?.props.onPressIn as CallableModel;
    onPressIn && onPressIn();
    _handleToggle(true);
  };

  const _handleRelease = (): void => {
    const onPressOut = children?.props.onPressOut as CallableModel;
    onPressOut && onPressOut();
    _handleToggle(false);
  };

  return children
    ? cloneElement(children, {
        onMouseEnter: isHoverable
          ? () => (_isHoverable() ? _handleToggle(true) : undefined)
          : undefined,
        onMouseLeave: isHoverable ? () => _handleToggle(false) : undefined,
        onPressIn: isPressable ? _handleGrant : undefined,
        onPressOut: isPressable ? _handleRelease : undefined,
        onResponderGrant: isPressable ? _handleGrant : undefined,
        onResponderRelease: isPressable ? _handleRelease : undefined,
      })
    : null;
};
