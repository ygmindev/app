import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import type { TooltipWithIconPropsModel } from '@lib/frontend/core/components/TooltipWithIcon/TooltipWithIcon.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { THEME_COLOR, THEME_SHADE } from '@lib/frontend/styling/utils/theme/theme.constants';

export const TooltipWithIcon: SFCModel<TooltipWithIconPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Tooltip
      testID={testID}
      tooltip={children}>
      {(isActive) => (
        <Icon
          color={color}
          icon={ICON.info}
          shade={isActive ? THEME_SHADE.DARK : undefined}
          style={styles}
        />
      )}
    </Tooltip>
  );
};
