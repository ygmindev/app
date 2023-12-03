import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Item } from '#lib-frontend/core/components/Item/Item';
import { type PressableItemPropsModel } from '#lib-frontend/core/components/PressableItem/PressableItem.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_JUSTIFY } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const PressableItem: LFCModel<PressableItemPropsModel> = ({
  color,
  elementState,
  icon,
  image,
  onPress,
  pVertical = THEME_SIZE.SMALL,
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
          justifySelf={FLEX_JUSTIFY.END}
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
          pVertical={pVertical}
          rightElement={rightElementF && rightElementF(isActive)}
          title={title}
          type={type}
        />
      )}
    </Activatable>
  );
};