import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { ACTIVATABLE_TRIGGER } from '@lib/frontend/core/components/Activatable/Activatable.constants';
import { type ActivatableRefModel } from '@lib/frontend/core/components/Activatable/Activatable.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Dropdown } from '@lib/frontend/core/components/Dropdown/Dropdown';
import { type DropdownRefModel } from '@lib/frontend/core/components/Dropdown/Dropdown.models';
import {
  type DroppablePropsModel,
  type DroppableRefModel,
} from '@lib/frontend/core/components/Droppable/Droppable.models';
import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { View } from '@lib/frontend/core/components/View/View';
import { type RSFCModel } from '@lib/frontend/core/core.models';
import { isTypeOf } from '@lib/shared/core/utils/isTypeOf/isTypeOf';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import { cloneElement, forwardRef, useImperativeHandle, useRef, useState } from 'react';

export const Droppable: RSFCModel<DroppableRefModel, DroppablePropsModel> = forwardRef(
  ({ anchor, children, isOpen, testID, trigger, ...props }, ref) => {
    const [isActive, isActiveSet] = useState<boolean>(false);
    const activatableRef = useRef<ActivatableRefModel>(null);
    const dropdownRef = useRef<DropdownRefModel>(null);

    useImperativeHandle(ref, () => ({
      scrollTo: (position) => dropdownRef.current?.scrollTo(position),
      toggle: (v) => dropdownRef.current?.toggle(v),
    }));

    let anchorF = anchor(isActive);

    const { onPress, onPressIn, onPressOut } = anchorF.props as PressablePropsModel;
    const isPressable =
      onPress ||
      onPressIn ||
      onPressOut ||
      isTypeOf(anchorF, Button) ||
      isTypeOf(anchorF, Pressable);

    if (isPressable) {
      anchorF = cloneElement(anchorF, {
        onPress:
          trigger === ACTIVATABLE_TRIGGER.PRESS
            ? async () => {
                onPress && (await onPress());
                activatableRef?.current?.press && (await activatableRef.current.press());
              }
            : undefined,
        onPressIn:
          trigger === ACTIVATABLE_TRIGGER.FOCUS
            ? () => {
                onPressIn && onPressIn();
                activatableRef?.current?.pressIn && activatableRef.current.pressIn();
              }
            : undefined,
        onPressOut:
          trigger === ACTIVATABLE_TRIGGER.FOCUS
            ? () => {
                onPressOut && onPressOut();
                activatableRef?.current?.pressOut && activatableRef.current.pressOut();
              }
            : undefined,
      });
    }

    const childrenF = (
      <Dropdown
        {...props}
        anchor={anchorF}
        isOpen={isOpen ?? isActive}
        onToggle={(value) => isActiveSet(value || false)}
        ref={dropdownRef}>
        {children}
      </Dropdown>
    );

    return (
      <Activatable
        onActive={() => isActiveSet(true)}
        onInactive={() => isActiveSet(false)}
        ref={isPressable ? activatableRef : undefined}
        trigger={trigger}>
        <View testID={testID}>{childrenF}</View>
      </Activatable>
    );
  },
);

process.env.APP_IS_DEBUG && (Droppable.displayName = variableName({ Droppable }));
