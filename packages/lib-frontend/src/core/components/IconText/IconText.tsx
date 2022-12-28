import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { IconTextPropsModel } from '@lib/frontend/core/components/IconText/IconText.models';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { get } from 'lodash';

export const IconText: SFCModel<IconTextPropsModel> = ({
  children,
  confirmMessage,
  from,
  icon,
  isDisabled,
  isPressed,
  isVertical,
  onPress,
  testID,
  to,
  tooltip,
  ...props
}) => {
  const { computedStyles, inheritedStyles, propsWithOutStyle, styles } = useStyles({ props });
  const theme = useTheme();

  let element = (
    <Wrapper
      isCenter={isVertical}
      isRowAlign={!isVertical}
      style={onPress ? computedStyles : styles}
      testID={testID}>
      {icon && (
        <Icon
          {...propsWithOutStyle}
          icon={icon}
        />
      )}

      {children && <Text {...propsWithOutStyle}>{children}</Text>}
    </Wrapper>
  );

  if (onPress) {
    element = (
      <Pressable
        confirmMessage={confirmMessage}
        from={{
          ...(props.color ? { backgroundColor: theme.colors.background.main } : {}),
          ...(from || {}),
        }}
        isCenter
        isDisabled={isDisabled}
        isPressed={isPressed}
        onPress={onPress}
        style={inheritedStyles}
        testID={testID}
        to={{
          ...(props.color
            ? { backgroundColor: get(theme.colors, [props.color, 'light']) || props.color }
            : {}),
          ...(to || {}),
        }}
        tooltip={tooltip}>
        {element}
      </Pressable>
    );
  }

  return element;
};
