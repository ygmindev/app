import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import type { LineItemPropsModel } from '@lib/frontend/core/components/LineItem/LineItem.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import { useState } from 'react';

export const LineItem: SFCModel<LineItemPropsModel> = ({
  children,
  onPress,
  rightElement,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const [isActive, isActiveSet] = useState<boolean>();
  return (
    <Activatable
      onActive={() => isActiveSet(true)}
      onInactive={() => isActiveSet(false)}
      style={styles}>
      <Wrapper
        isRowAlign
        justify={FLEX_JUSTIFY.SPACE_BETWEEN}
        onPress={onPress}
        p
        testID={testID}>
        {children}

        {rightElement && rightElement(isActive)}
      </Wrapper>
    </Activatable>
  );
};
