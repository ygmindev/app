import { _Icon } from '@lib/frontend/core/components/Icon/_Icon';
import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { textStyler } from '@lib/frontend/styling/utils/styler/textStyler/textStyler';
import { THEME_BASIC_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import { get } from 'lodash';
import type { ComponentType } from 'react';
import type { AnimatableProperties } from 'react-native-animatable';
import { createAnimatableComponent } from 'react-native-animatable';

const _IconWithAnimationProps = createAnimatableComponent(_Icon);

const { Press } = lazy(() => import('@lib/frontend/core/components/Press/Press'));

export const Icon: SFCModel<IconPropsModel> = ({
  animation,
  confirmMessage,
  from,
  icon,
  isDisabled,
  isPressed,
  onPress,
  testID,
  to,
  tooltip,
  ...props
}) => {
  const { computedStyles, inheritedStyles, styles } = useStyles({ props, stylers: [textStyler] });
  const theme = useTheme();

  const Component: ComponentType<_IconPropsModel> = animation ? _IconWithAnimationProps : _Icon;
  let animationProps: WithTestIdModel = { testID };
  if (animation) {
    animationProps = {
      animation: animation.animation,
      duration: animation.duration || theme.animation.duration,
      easing: 'ease-in-out',
      onTransitionEnd: animation.onEnd,
      onTransitionStart: animation.onStart,
      transition: animation.transition,
    } as AnimatableProperties<object> & WithTestIdModel;
  }
  let element = (
    <Component
      {...animationProps}
      icon={icon}
      style={onPress ? computedStyles : styles}
    />
  );
  if (onPress) {
    element = (
      <Press
        confirmMessage={confirmMessage}
        from={{
          ...(props.color
            ? {
                backgroundColor: isPressed
                  ? theme.colors.background.muted
                  : theme.colors.background.main,
              }
            : {}),
          ...(from || {}),
        }}
        isDisabled={isDisabled}
        isPressed={isPressed}
        onPress={onPress}
        p={THEME_BASIC_SIZE.SMALL}
        style={inheritedStyles}
        testID={testID}
        to={{
          ...(props.color
            ? {
                backgroundColor:
                  get(theme.colors, [props.color, isPressed ? 'dark' : 'light']) || props.color,
              }
            : {}),
          ...(to || {}),
        }}
        tooltip={tooltip}>
        {element}
      </Press>
    );
  }
  return element;
};
