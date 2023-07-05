import { type ChipPropsModel } from '#lib-frontend/core/components/Chip/Chip.models';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import {
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '#lib-frontend/style/style.constants';

export const Chip: SFCModel<ChipPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      backgroundColor={color}
      isCenter
      p={THEME_SIZE.SMALL}
      round
      style={styles}
      testID={testID}>
      <Text
        color={color}
        colorRole={THEME_ROLE.CONTRAST}
        fontSize={THEME_SIZE_MORE.SMALL}
        isBold>
        {children}
      </Text>
    </Wrapper>
  );
};
