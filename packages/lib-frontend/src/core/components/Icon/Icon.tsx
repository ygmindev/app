import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { _Icon } from '@lib/frontend/core/components/Icon/_Icon';
import type { _IconPropsModel } from '@lib/frontend/core/components/Icon/_Icon.models';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';
import { get } from 'lodash';
import type { ComponentType } from 'react';

const _IconAnimatable = animatable<_IconPropsModel>({ Component: _Icon });

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

  const Component: ComponentType<_IconPropsModel> = animation ? _IconAnimatable : _Icon;

  let element = (
    <Component
      {...(animation || {})}
      icon={icon}
      style={onPress ? computedStyles : styles}
      testID={testID}
    />
  );
  if (onPress) {
    element = (
      <Press
        confirmMessage={confirmMessage}
        from={{
          ...(props.color
            ? { backgroundColor: get(theme.colors, [props.color, 'light']) || props.color }
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
            ? { backgroundColor: get(theme.colors, [props.color, 'dark']) || props.color }
            : {}),
          ...(to || {}),
        }}
        tooltip={tooltip}
      >
        {element}
      </Press>
    );
  }
  return element;
};
