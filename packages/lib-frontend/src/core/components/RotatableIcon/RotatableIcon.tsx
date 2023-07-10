import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { type RotatableIconPropsModel } from '#lib-frontend/core/components/RotatableIcon/RotatableIcon.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { DIRECTION, ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type DirectionModel, type SFCModel } from '#lib-frontend/core/core.models';

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

export const RotatableIcon: SFCModel<RotatableIconPropsModel> = ({
  directionActive = DIRECTION.TOP,
  directionInactive = DIRECTION.BOTTOM,
  elementState,
  testID,
  ...props
}) => (
  <Wrapper
    animation={{
      states: {
        [ELEMENT_STATE.INACTIVE]: { transform: [{ rotateZ: getRotation(directionInactive) }] },
        [ELEMENT_STATE.ACTIVE]: { transform: [{ rotateZ: getRotation(directionActive) }] },
      },
    }}
    elementState={elementState}
    testID={testID}>
    <Icon
      {...props}
      icon="chevronUp"
    />
  </Wrapper>
);
