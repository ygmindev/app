import { type ChipPropsModel } from '#lib-frontend/core/components/Chip/Chip.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';

export const Chip: SFCModel<ChipPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      backgroundColor={color}
      isCenter
      p={THEME_SIZE.SMALL}
      round={THEME_SIZE.SMALL}>
      <TranslatableText
        color={color}
        colorRole={THEME_ROLE.CONTRAST}
        fontSize={THEME_SIZE.SMALL}
        isBold>
        {children}
      </TranslatableText>
    </Wrapper>
  );
};
