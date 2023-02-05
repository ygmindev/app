import { ANIMATION_STATES_APPEAR } from '@lib/frontend/animation/animation.constants';
import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { useState } from 'react';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Wrapper
      p
      spacing
      testID={testID}>
      <Button onPress={() => setIsVisible(!isVisible)}>delete</Button>

      <Exitable>
        {isVisible && (
          <Wrapper
            animation={{ states: ANIMATION_STATES_APPEAR }}
            backgroundColor="red"
            height={100}
            width={100}
          />
        )}
      </Exitable>
    </Wrapper>
  );
};
