import type { _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import type { FCModel } from '@lib/frontend/core/core.models';
import { Text } from 'react-native';

export const _Text: FCModel<_TextPropsModel> = ({
  Component,
  children,
  isEllipsis,
  onPress,
  style,
  testID,
  ...props
}) => {
  const _Component = Component || Text;
  return (
    <_Component
      ellipsizeMode={isEllipsis ? 'tail' : undefined}
      numberOfLines={isEllipsis ? 1 : undefined}
      onPress={onPress ? () => onPress() : undefined}
      style={style}
      testID={testID}
      {...props}>
      {children}
    </_Component>
  );
};
