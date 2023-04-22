import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { LineItemPropsModel } from '@lib/frontend/core/components/LineItem/LineItem.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useState } from 'react';

export const LineItem: SFCModel<LineItemPropsModel> = ({
  children,
  icon,
  onPress,
  rightElement,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const [isActive, isActiveSet] = useState<boolean>();
  return (
    <Activatable
      onActive={() => isActiveSet(true)}
      onInactive={() => isActiveSet(false)}
      style={styles}>
      <Wrapper
        isRowAlign
        onPress={onPress}
        p
        testID={testID}>
        {icon && (
          <Wrapper
            isCenter
            width={theme.shape.height.s}>
            <Icon icon={icon} />
          </Wrapper>
        )}

        {children && (
          <Wrapper
            grow
            isRowAlign
            justify={FLEX_JUSTIFY.SPACE_BETWEEN}>
            {children}
          </Wrapper>
        )}

        {rightElement && rightElement(isActive)}
      </Wrapper>
    </Activatable>
  );
};
