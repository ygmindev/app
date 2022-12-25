import { _Text } from '@lib/frontend/core/components/Text/_Text';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { isFunction, isString } from 'lodash';

export const Text: SFCModel<TextPropsModel> = ({ children, ...props }) => {
  const { styles } = useStyles({ props, stylers: [textStyler] });
  const translation = useTranslation();
  return (
    <_Text
      {...props}
      style={styles}>
      {isString(children)
        ? translation.t(children)
        : isFunction(children)
        ? children(translation)
        : children}
    </_Text>
  );
};
