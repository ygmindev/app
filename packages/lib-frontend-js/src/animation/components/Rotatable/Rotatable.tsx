import { type RotatablePropsModel } from '@lib/frontend/animation/components/Rotatable/Rotatable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type DirectionModel, type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';

const getRotation = (direction: DirectionModel): string => {
  switch (direction) {
    case DIRECTION.TOP:
      return '0deg';
    case DIRECTION.RIGHT:
      return '90deg';
    case DIRECTION.BOTTOM:
      return '180deg';
    case DIRECTION.LEFT:
      return '270deg';
    default:
      return '0deg';
  }
};

export const Rotatable: LFCModel<RotatablePropsModel> = ({
  children,
  directionActive = DIRECTION.BOTTOM,
  isActive,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  return (
    <Wrapper
      {...wrapperProps}
      animation={{
        duration: theme.animation.effect / 2,
        states: {
          [ELEMENT_STATE.INACTIVE]: { transform: [{ rotateZ: '0deg' }] },
          [ELEMENT_STATE.ACTIVE]: { transform: [{ rotateZ: getRotation(directionActive) }] },
        },
      }}
      elementState={isActive ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INACTIVE}>
      {children}
    </Wrapper>
  );
};
