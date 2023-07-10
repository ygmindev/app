import { useState } from 'react';

import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Dropdown } from '#lib-frontend/core/components/Dropdown/Dropdown';
import { type DroppablePropsModel } from '#lib-frontend/core/components/Droppable/Droppable.models';
import { View } from '#lib-frontend/core/components/View/View';
import { type SFCModel } from '#lib-frontend/core/core.models';

export const Droppable: SFCModel<DroppablePropsModel> = ({
  anchor,
  children,
  testID,
  trigger,
  ...props
}) => {
  const [isActive, isActiveSet] = useState<boolean>(false);
  const anchorF = anchor(isActive);
  const childrenF = (
    <Dropdown
      {...props}
      anchor={anchorF}
      isOpen={isActive}
      onToggle={(value) => isActiveSet(value || false)}>
      {children}
    </Dropdown>
  );
  return (
    <Activatable
      onActive={() => isActiveSet(true)}
      onInactive={() => isActiveSet(false)}
      trigger={trigger}>
      <View testID={testID}>{childrenF}</View>
    </Activatable>
  );
};
