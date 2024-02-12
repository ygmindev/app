import { type ChipPropsModel } from '@lib/frontend/core/components/Chip/Chip.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FLEX_ALIGN,
  FLEX_JUSTIFY,
} from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const Chip: LFCModel<ChipPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  icon,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      alignSelf={FLEX_ALIGN.START}
      backgroundColor={color}
      isAlign
      isCenter
      isRow
      justifySelf={FLEX_JUSTIFY.START}
      p={THEME_SIZE.SMALL}
      round>
      {icon && (
        <Icon
          color={color}
          colorRole={THEME_ROLE.CONTRAST}
          fontSize={THEME_SIZE.SMALL}
          icon={icon}
        />
      )}

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
