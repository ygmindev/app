import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import type { DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { View } from '@lib/frontend/core/components/View/View';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

export const Droppable: SFCModel<DroppablePropsModel> = ({
  anchor,
  children,
  testID,
  ...props
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Activatable
      onActive={() => setIsActive(true)}
      onInactive={() => setIsActive(false)}>
      <View testID={testID}>
        <Dropdown
          {...props}
          anchor={anchor(isActive)}
          isOpen={isActive}>
          {children}
        </Dropdown>
      </View>
    </Activatable>
  );
};
