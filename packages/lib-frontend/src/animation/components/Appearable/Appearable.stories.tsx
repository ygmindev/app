import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

const Component: SFCModel<AppearablePropsModel> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Wrapper spacing>
      <Button onPress={() => setIsActive(!isActive)}>{isActive ? 'Close' : 'Open'}</Button>

      <Appearable
        {...props}
        isVisible={isActive}>
        <WrapperFixture text="Appear" />
      </Appearable>
    </Wrapper>
  );
};

const { Story, meta } = withStory<AppearablePropsModel>({
  defaultProps: {},
  displayName: 'Appear',
  target: Component,
  variants: [{ props: { isLazy: false } }, { props: { isScalable: false } }],
});

export default meta;

export { Story };
