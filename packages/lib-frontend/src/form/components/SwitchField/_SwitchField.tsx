import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import type { _SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/_SwitchField.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import {
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
} from '@lib/frontend/style/utils/theme/theme.constants';
import { Switch } from 'react-native-switch';

export const _SwitchField: SFCModel<_SwitchFieldPropsModel> = ({
  activeIcon = ICON.check,
  inactiveIncon = ICON.times,
  isDisabled,
  onChange,
  value,
}) => {
  const theme = useTheme();
  const { styles: innerCircleStyle } = useStyles<_SwitchFieldPropsModel>({
    props: {},
    stylers: [
      {
        alignItems: 'center',
        borderColor: value === 'true' ? theme.colors.primary.main : theme.colors.secondary.main,
        justifyContent: 'center',
      },
    ],
  });

  return (
    <Wrapper opacity={isDisabled ? 0.5 : 1}>
      <Switch
        backgroundActive={theme.colors.primary.main}
        backgroundInactive={theme.colors.secondary.main}
        circleSize={25}
        disabled={isDisabled}
        innerCircleStyle={innerCircleStyle}
        onValueChange={(value) => onChange && onChange(value ? 'true' : 'false')}
        renderActiveText={false}
        renderInActiveText={false}
        renderInsideCircle={() => (
          <Icon
            color={value ? THEME_COLOR.PRIMARY : THEME_RELATIVE_COLOR.MUTED}
            icon={value ? activeIcon : inactiveIncon}
          />
        )}
        value={value === 'true'}
      />
    </Wrapper>
  );
};
