import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { Title } from '@lib/frontend/core/components/Title/Title';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const PressableTitle: LFCModel<PressableTitlePropsModel> = ({
  color,
  description,
  elementState,
  fontStyle,
  icon,
  image,
  leftElement,
  onPress,
  rightElement,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });

  const rightElementF =
    rightElement ??
    ((isActive) => (
      <Button
        elementState={
          onPress ? (elementState ?? (isActive ? ELEMENT_STATE.ACTIVE : undefined)) : undefined
        }
        icon={onPress ? 'chevronRight' : undefined}
        isHidden={!onPress}
        justifySelf={FLEX_JUSTIFY.END}
        type={BUTTON_TYPE.INVISIBLE}
      />
    ));

  return (
    <Activatable>
      {(isActive) => (
        <Title
          {...wrapperProps}
          color={color}
          description={description}
          elementState={elementState}
          fontStyle={fontStyle}
          icon={icon}
          image={image}
          leftElement={leftElement?.(isActive)}
          onPress={onPress}
          rightElement={rightElementF?.(isActive)}
          title={title}
        />
      )}
    </Activatable>
  );
};
