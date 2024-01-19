import { cloneElement, useRef, useState } from 'react';

import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { type ActivatableRefModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { type DroppablePropsModel } from '@lib/frontend/core/components/Droppable/Droppable.models';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { View } from '@lib/frontend/core/components/View/View';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';

export const Droppable: SFCModel<DroppablePropsModel> = ({
  anchor,
  children,
  testID,
  trigger,
  ...props
}) => {
  const [isActive, isActiveSet] = useState<boolean>(false);
  const ref = useRef<ActivatableRefModel>(null);
  let anchorF = anchor(isActive);

  const { onPress, onPressIn, onPressOut } = anchorF.props as PressablePropsModel;
  const isPressable =
    onPress || onPressIn || onPressOut || isTypeOf(anchorF, Button) || isTypeOf(anchorF, Pressable);

  if (isPressable) {
    anchorF = cloneElement(anchorF, {
      onPress:
        trigger === ACTIVATABLE_TRIGGER.PRESS
          ? async () => {
              onPress && (await onPress());
              ref?.current?.press && (await ref.current.press());
            }
          : undefined,
      onPressIn:
        trigger === ACTIVATABLE_TRIGGER.FOCUS
          ? () => {
              onPressIn && onPressIn();
              ref?.current?.pressIn && ref.current.pressIn();
            }
          : undefined,
      onPressOut:
        trigger === ACTIVATABLE_TRIGGER.FOCUS
          ? () => {
              onPressOut && onPressOut();
              ref?.current?.pressOut && ref.current.pressOut();
            }
          : undefined,
    });
  }

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
      ref={isPressable ? ref : undefined}
      trigger={trigger}>
      <View testID={testID}>{childrenF}</View>
    </Activatable>
  );
};
