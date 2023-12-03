import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Item } from '#lib-frontend/core/components/Item/Item';
import { type PressableItemPropsModel } from '#lib-frontend/core/components/PressableItem/PressableItem.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const PressableItem: LFCModel<PressableItemPropsModel> = ({
  children,
  color,
  elementState,
  icon,
  image,
  onPress,
  rightElement,
  title,
  type,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const rightElementF =
    rightElement ??
    (onPress &&
      ((isActive) => (
        <Button
          elementState={elementState ?? (isActive ? ELEMENT_STATE.ACTIVE : undefined)}
          icon="chevronRight"
          type={BUTTON_TYPE.INVISIBLE}
        />
      )));

  return (
    <Activatable>
      {(isActive) => (
        <Item
          {...wrapperProps}
          color={color}
          elementState={elementState}
          icon={icon}
          image={image}
          onPress={onPress}
          rightElement={rightElementF && rightElementF(isActive)}
          title={title}
          type={type}>
          {children}
        </Item>
      )}
    </Activatable>
  );
};
