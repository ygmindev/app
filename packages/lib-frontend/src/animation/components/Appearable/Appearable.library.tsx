import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { useState } from 'react';

export const props: LibraryPropsModel<AppearablePropsModel> = {
  Component: Appearable,
  Renderer: ({ ...props }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    return (
      <Wrapper spacing>
        <Button
          onPress={() => setIsVisible(!isVisible)}
          type={BUTTON_TYPE.TRANSPARENT}>
          {isVisible ? 'Close' : 'Open'}
        </Button>

        <Appearable
          {...props}
          isVisible={isVisible}
        />
      </Wrapper>
    );
  },
  defaultProps: {
    children: <WrapperFixture />,
  },
};