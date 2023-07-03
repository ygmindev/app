import {
  ANIMATION_STATES_APPEARABLE,
  ANIMATION_STATES_SCALABLE,
} from '#lib-frontend/animation/animation.constants';
import { type AppearablePropsModel } from '#lib-frontend/animation/components/Appearable/Appearable.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { merge } from '#lib-shared/core/utils/merge/merge';

export const Appearable: SFCModel<AppearablePropsModel> = ({
  animation,
  children,
  isScalable = true,
  isVisible,
  ...props
}) => (
  <Wrapper
    {...props}
    animation={{
      states: merge(
        filterNil([ANIMATION_STATES_APPEARABLE, isScalable && ANIMATION_STATES_SCALABLE]),
      ),
      ...animation,
    }}
    elementState={isVisible ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.EXIT}
    isHidden={!isVisible}>
    {children}
  </Wrapper>
);
