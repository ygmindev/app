import { IconText } from '@lib/frontend/core/components/IconText/IconText';
import type { TagPropsModel } from '@lib/frontend/core/components/Tag/Tag.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FONT_ALIGN } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
} from '@lib/frontend/style/utils/theme/theme.constants';

export const Tag: SFCModel<TagPropsModel> = ({
  children,
  color = THEME_COLOR.SECONDARY,
  icon,
  isCapitalize,
  isUppercase,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      backgroundColor={color}
      p={THEME_BASIC_SIZE.SMALL}
      round
      style={styles}
      testID={testID}>
      <IconText
        align={FONT_ALIGN.CENTER}
        color={THEME_RELATIVE_COLOR.CONTRAST}
        icon={icon}
        isCapitalize={isCapitalize}
        isUppercase={isUppercase}>
        {children}
      </IconText>
    </Wrapper>
  );
};
