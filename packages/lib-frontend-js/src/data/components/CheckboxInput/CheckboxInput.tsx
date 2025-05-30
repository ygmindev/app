import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type CheckboxInputPropsModel,
  type CheckboxInputRefModel,
} from '@lib/frontend/data/components/CheckboxInput/CheckboxInput.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_COLOR_MORE,
  THEME_ROLE,
  THEME_SIZE_MORE,
} from '@lib/frontend/style/style.constants';

export const CheckboxInput: RLFCModel<CheckboxInputRefModel, CheckboxInputPropsModel> = ({
  defaultValue,
  elementState,
  label,
  onChange,
  value,
  ...props
}) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useValueControlled<boolean>({
    defaultValue: defaultValue ?? false,
    onChange,
    value,
  });

  return (
    <Wrapper
      {...wrapperProps}
      isAlign
      isRow
      onPress={() => valueControlledSet(!valueControlled)}>
      <Wrapper
        backgroundColor={valueControlled ? THEME_COLOR.PRIMARY : undefined}
        border
        borderColor={THEME_COLOR.PRIMARY}
        borderRole={THEME_ROLE.MAIN}
        height={theme.shape.size[THEME_SIZE_MORE.XSMALL]}
        round={theme.shape.borderRadius[THEME_SIZE_MORE.XSMALL]}
        width={theme.shape.size[THEME_SIZE_MORE.XSMALL]}>
        <Appearable isActive={valueControlled}>
          <Icon
            color={THEME_COLOR_MORE.SURFACE}
            colorRole={THEME_ROLE.MAIN}
            icon="check"
          />
        </Appearable>
      </Wrapper>

      {label && <AsyncText>{label}</AsyncText>}
    </Wrapper>
  );
};
