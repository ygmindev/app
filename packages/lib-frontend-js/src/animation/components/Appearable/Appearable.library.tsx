import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { type AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { LIBRARY_CATEGORY_ANIMATION } from '@lib/frontend/library/components/Library/Library.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { useState } from 'react';

export const props: LibraryPropsModel<AppearablePropsModel> = {
  Component: Appearable,
  Renderer: ({ element }) => {
    const [isActive, isActiveSet] = useState<boolean>(false);
    return (
      <Wrapper s>
        <Button
          onPress={() => isActiveSet(!isActive)}
          type={BUTTON_TYPE.TRANSPARENT}>
          {isActive ? 'Close' : 'Open'}
        </Button>

        {/* {cloneElement(element, { isActive })} */}
      </Wrapper>
    );
  },
  category: LIBRARY_CATEGORY_ANIMATION,
  defaultProps: {
    children: <WrapperFixture />,
  },
};
