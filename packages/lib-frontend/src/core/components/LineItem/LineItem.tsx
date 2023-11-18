import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Item } from '#lib-frontend/core/components/Item/Item';
import { type LineItemPropsModel } from '#lib-frontend/core/components/LineItem/LineItem.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FONT_TYPE } from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const LineItem: LFCModel<LineItemPropsModel> = ({
  children,
  color,
  elementState,
  icon,
  image,
  label,
  onPress,
  rightElement,
  type = FONT_TYPE.TITLE,
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
          label={label}
          onPress={onPress}
          pVertical={THEME_SIZE.SMALL}
          rightElement={rightElementF && rightElementF(isActive)}
          type={type}>
          {children}
        </Item>
      )}
    </Activatable>
  );
};
