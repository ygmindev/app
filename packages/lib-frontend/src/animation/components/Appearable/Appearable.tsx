import {
  ANIMATION_STATES_APPEAR_SCALABLE,
  ANIMATION_STATES_APPEARABLE,
} from '@lib/frontend/animation/animation.constants';
import { type AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';

export const Appearable: LFCModel<AppearablePropsModel> = ({
  animation,
  children,
  isActive,
  isHidden,
  isScalable = true,
  ...props
}) => (
  <Wrapper
    {...props}
    animation={{
      states: isScalable ? ANIMATION_STATES_APPEAR_SCALABLE : ANIMATION_STATES_APPEARABLE,
      ...animation,
    }}
    elementState={isActive ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.EXIT}
    isHidden={isHidden ?? !isActive}>
    {children}
  </Wrapper>
);
