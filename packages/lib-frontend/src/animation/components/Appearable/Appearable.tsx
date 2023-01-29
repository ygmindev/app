import {
  ANIMATION_STATES_APPEAR,
  ANIMATION_STATES_SCALE,
} from '@lib/frontend/animation/animation.constants';
import type { AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { merge } from '@lib/shared/core/utils/merge/merge';

export const Appearable: SFCModel<AppearablePropsModel> = ({
  animation,
  children,
  isVisible,
  ...props
}) => (
  <Wrapper
    animation={{
      ...animation,
      states: merge({ values: [ANIMATION_STATES_APPEAR, ANIMATION_STATES_SCALE] }),
    }}
    elementState={isVisible ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.INVISIBLE}
    {...props}>
    {children}
  </Wrapper>
);
