import { ANIMATION_STATES_ZOOMABLE } from '@lib/frontend/animation/animation.constants';
import { type ZoomablePropsModel } from '@lib/frontend/animation/components/Zoomable/Zoomable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';

export const Zoomable: LFCModel<ZoomablePropsModel> = ({
  animation,
  children,
  isActive,
  scale = 1.1,
  ...props
}) => {
  return (
    <Wrapper
      {...props}
      animation={{
        states: scale
          ? { ...ANIMATION_STATES_ZOOMABLE, [ELEMENT_STATE.ACTIVE]: { scale } }
          : ANIMATION_STATES_ZOOMABLE,
        ...animation,
      }}
      elementState={isActive ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.EXIT}>
      {children}
    </Wrapper>
  );
};
