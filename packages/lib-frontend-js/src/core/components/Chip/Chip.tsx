import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { type ChipPropsModel } from '@lib/frontend/core/components/Chip/Chip.models';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';

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
      backgroundColor={color}
      isAlign
      isCenter
      isRow
      pHorizontal
      pVertical={THEME_SIZE.SMALL}
      round>
      {icon && (
        <Icon
          color={color}
          colorRole={THEME_ROLE.CONTRAST}
          fontSize={THEME_SIZE.SMALL}
          icon={icon}
        />
      )}

      <AsyncText
        color={color}
        colorRole={THEME_ROLE.CONTRAST}
        fontSize={THEME_SIZE.SMALL}
        isBold>
        {children}
      </AsyncText>
    </Wrapper>
  );
};
