import { _isHoverable } from '@lib/frontend/core/components/Activatable/_isHoverable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import {
  type ActivatablePropsModel,
  type ActivatableRefModel,
} from '@lib/frontend/core/components/Activatable/Activatable.models';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { type RSFCModel } from '@lib/frontend/core/core.models';
import { useIsMobile } from '@lib/frontend/core/hooks/useIsMobile/useIsMobile';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import isFunction from 'lodash/isFunction';
import { cloneElement, forwardRef, type ReactElement, useImperativeHandle, useState } from 'react';

export const Activatable: RSFCModel<ActivatableRefModel, ActivatablePropsModel> = forwardRef(
  ({ children, onActive, onInactive, trigger, ...props }, ref) => {
    const { styles } = useStyles({ props });
    const isMobile = useIsMobile();
    const [isActive, isActiveSet] = useState<boolean>(false);
    const childrenF: ReactElement<PressablePropsModel> | undefined | null = isFunction(children)
      ? children(isActive)
      : children;
    const triggerF = trigger ?? (isMobile ? ACTIVATABLE_TRIGGER.PRESS : ACTIVATABLE_TRIGGER.HOVER);

    const handleToggle = (value?: boolean): void => {
      isActiveSet(value || false);
      value ? onActive && onActive() : onInactive && onInactive();
    };

    const handlePress = (): void => {
      const { onPress } = childrenF?.props as PressablePropsModel;
      onPress && void onPress();
      handleToggle(!isActive);
    };

    const handlePressIn = (): void => {
      const { onPressIn } = childrenF?.props as PressablePropsModel;
      onPressIn && void onPressIn();
      handleToggle(true);
    };

    const handlePressOut = (): void => {
      const { onPressOut } = childrenF?.props as PressablePropsModel;
      onPressOut && void onPressOut();
      handleToggle(false);
    };

    useImperativeHandle(ref, () => ({
      press: handlePress,
      pressIn: handlePressIn,
      pressOut: handlePressOut,
    }));

    const triggerProps: PressablePropsModel = (() => {
      switch (triggerF) {
        case ACTIVATABLE_TRIGGER.HOVER:
          return _isHoverable()
            ? { onMouseEnter: () => handleToggle(true), onMouseLeave: () => handleToggle(false) }
            : {};
        case ACTIVATABLE_TRIGGER.FOCUS:
          return {
            onPressIn: handlePressIn,
            onPressOut: handlePressOut,
            onResponderGrant: handlePressOut,
            onResponderRelease: handlePressOut,
          };
        case ACTIVATABLE_TRIGGER.PRESS:
          return { onPress: handlePress };
        default:
          return {};
      }
    })();

    return childrenF
      ? cloneElement(childrenF, { ...triggerProps, style: { ...childrenF.props.style, ...styles } })
      : childrenF || null;
  },
);

process.env.APP_IS_DEBUG && (Activatable.displayName = variableName({ Activatable }));
