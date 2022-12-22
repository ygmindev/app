import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import type { AppearPropsModel } from '@lib/frontend/animation/components/Appear/Appear.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

const Component: SFCModel<AppearPropsModel> = (props) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <Wrapper spacing>
      <Button onPress={() => setIsActive(!isActive)}>{isActive ? 'Close' : 'Open'}</Button>

      <Appear
        {...props}
        isVisible={isActive}>
        <WrapperFixture text="Appear" />
      </Appear>
    </Wrapper>
  );
};

const { Story, meta } = withStory<AppearPropsModel>({
  defaultProps: {},
  displayName: 'Appear',
  target: Component,
  variants: [{ props: { isLazy: false } }, { props: { isScalable: false } }],
});

export default meta;

export { Story };
