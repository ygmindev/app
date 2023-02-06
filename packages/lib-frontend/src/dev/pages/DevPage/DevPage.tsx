import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import type { DevPagePropsModel } from '@lib/frontend/dev/pages/DevPage/DevPage.models';
import { Notification } from '@lib/frontend/notification/components/Notification/Notification';
import { useState } from 'react';

export const DevPage: FCModel<DevPagePropsModel> = ({ testID }) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <Wrapper
      p
      spacing
      testID={testID}>
      <Button onPress={() => setIsVisible(!isVisible)}>delete</Button>

      <Exitable isInitial>
        {isVisible && (
          <Notification
            id="test"
            message="Notification"
          />
        )}
      </Exitable>
    </Wrapper>
  );
};
