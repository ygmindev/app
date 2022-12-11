import { Animatable } from '@lib/frontend/animation/components/Animatable/Animatable';
import { ANIMATABLE_TYPE } from '@lib/frontend/animation/components/Animatable/Animatable.constants';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { isFunction, isString } from 'lodash';
import { Text as NativeText } from 'react-native';

export const Text: SFCModel<TextPropsModel> = ({
  animation,
  children,
  isEllipsis,
  onPress,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  const translation = useTranslation();
  const Component = animation ? Animatable : NativeText;
  return (
    <Component
      ellipsizeMode={isEllipsis ? 'tail' : undefined}
      numberOfLines={isEllipsis ? 1 : undefined}
      onPress={onPress ? () => onPress() : undefined}
      style={styles}
      testID={testID}
      {...(animation ? { type: ANIMATABLE_TYPE.TEXT } : {})}
    >
      {isString(children)
        ? translation.t(children)
        : isFunction(children)
        ? children(translation)
        : children}
    </Component>
  );
};
