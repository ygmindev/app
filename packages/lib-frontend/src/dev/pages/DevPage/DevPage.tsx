import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { useRef } from 'react';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const ref = useRef<AnimatableRefModel>(null);
  return (
    <Wrapper
      p
      spacing
      testID={testID}>
      <Button
        onPress={() => {
          ref?.current?.toState('inactive');
        }}>
        delete
      </Button>

      <Wrapper
        animation={{ states: ANIMATION_STATES_APPEARABLE }}
        backgroundColor="red"
        elementState={ELEMENT_STATE.ACTIVE}
        height={100}
        ref={ref}
        width={100}
      />
    </Wrapper>
  );
};
