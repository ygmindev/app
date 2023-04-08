import { _isHoverable } from '@lib/frontend/core/components/Activatable/_isHoverable';
import type { ActivatablePropsModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import type { CallableModel } from '@lib/shared/core/core.models';
import isFunction from 'lodash/isFunction';
import { cloneElement, useState } from 'react';

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
  const _children = isFunction(children) ? children(isActive) : children;

  const _handleToggle = (value?: boolean): void => {
    isFunction(children) && isActiveSet(value || false);
    value ? onActive && onActive() : onInactive && onInactive();
  };

  const _handleGrant = (): void => {
    const onPressIn = _children?.props.onPressIn as CallableModel;
    onPressIn && onPressIn();
    _handleToggle(true);
  };

  const _handleRelease = (): void => {
    const onPressOut = _children?.props.onPressOut as CallableModel;
    onPressOut && onPressOut();
    _handleToggle(false);
  };

  return _children
    ? cloneElement(_children, {
        onMouseEnter: isHoverable
          ? () => (_isHoverable() ? _handleToggle(true) : undefined)
          : undefined,
        onMouseLeave: isHoverable ? () => _handleToggle(false) : undefined,
        onPressIn: isPressable ? _handleGrant : undefined,
        onPressOut: isPressable ? _handleRelease : undefined,
        onResponderGrant: isPressable ? _handleGrant : undefined,
        onResponderRelease: isPressable ? _handleRelease : undefined,
        style: { ..._children.props.style, ...styles },
      })
    : null;
};
