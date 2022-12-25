import { Text } from '@lib/frontend/core/components/Text/Text';
import { TooltipWithIcon } from '@lib/frontend/core/components/TooltipWithIcon/TooltipWithIcon';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { ErrorTooltipPropsModel } from '@lib/frontend/form/components/ErrorTooltip/ErrorTooltip.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

export const ErrorTooltip: SFCModel<ErrorTooltipPropsModel> = ({ error, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <TooltipWithIcon
      color={THEME_COLOR.ERROR}
      style={styles}
      testID={testID}>
      <Text color={THEME_COLOR.ERROR}>{error}</Text>
    </TooltipWithIcon>
  );
};
