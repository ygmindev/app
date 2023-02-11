import { animatable } from '@lib/frontend/animation/utils/animatable/animatable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import { useState } from 'react';

const _AnimatableIcon = animatable({ Component: Icon });

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Wrapper
      p
      spacing
      testID={testID}>
      <Button onPress={() => setIsVisible(!isVisible)}>delete</Button>

      <TextField
        icon="person"
        label="test"
      />
    </Wrapper>
  );
};
