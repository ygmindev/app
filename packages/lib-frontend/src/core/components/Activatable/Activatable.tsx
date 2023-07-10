import isFunction from 'lodash/isFunction';
import { cloneElement, type ReactElement, useState } from 'react';

import { _isHoverable } from '#lib-frontend/core/components/Activatable/_isHoverable';
import { ACTIVATABLE_TRIGGER } from '#lib-frontend/core/components/Activatable/Activatable.constants';
import { type ActivatablePropsModel } from '#lib-frontend/core/components/Activatable/Activatable.models';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useIsMobile } from '#lib-frontend/core/hooks/useIsMobile/useIsMobile';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { type CallableModel } from '#lib-shared/core/core.models';

export const Activatable: SFCModel<ActivatablePropsModel> = ({
  children,
  onActive,
  onInactive,
  trigger,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const isMobile = useIsMobile();
  const [isActive, isActiveSet] = useState<boolean>(false);
  const childrenF: ReactElement<PressablePropsModel> | undefined = isFunction(children)
    ? children(isActive)
    : children;
  const triggerF = trigger ?? (isMobile ? ACTIVATABLE_TRIGGER.FOCUS : ACTIVATABLE_TRIGGER.HOVER);

  const handleToggle = (value?: boolean): void => {
    isActiveSet(value || false);
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

  const triggerProps: PressablePropsModel = (() => {
    switch (triggerF) {
      case ACTIVATABLE_TRIGGER.HOVER:
        return _isHoverable()
          ? { onMouseEnter: () => handleToggle(true), onMouseLeave: () => handleToggle(false) }
          : {};
      case ACTIVATABLE_TRIGGER.FOCUS:
        return {
          onPressIn: handleGrant,
          onPressOut: handleRelease,
          onResponderGrant: handleRelease,
          onResponderRelease: handleRelease,
        };
      case ACTIVATABLE_TRIGGER.PRESS:
        return { onPress: () => handleToggle(!isActive) };
      default:
        return {};
    }
  })();

  return childrenF
    ? cloneElement(childrenF, { ...triggerProps, style: { ...childrenF.props.style, ...styles } })
    : null;
};
