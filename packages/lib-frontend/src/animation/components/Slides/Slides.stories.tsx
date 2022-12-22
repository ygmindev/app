import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import type { SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

const Component: SFCModel<SlidesPropsModel> = (props) => {
  const [current, currentSet] = useState<number>(0);
  const slides = [
    <WrapperFixture text="slide 1" />,
    <WrapperFixture text="slide 2" />,
    <WrapperFixture text="slide 3" />,
  ];
  return (
    <Wrapper spacing>
      <Wrapper isRowAlign>
        <Appear isVisible={current > 0}>
          <Button onPress={() => currentSet(Math.max(current - 1, 0))}>Previous</Button>
        </Appear>

        <Appear isVisible={current < slides.length - 1}>
          <Button onPress={() => currentSet(Math.min(current + 1, slides.length - 1))}>Next</Button>
        </Appear>
      </Wrapper>

      <Wrapper
        height={500}
        width={500}>
        <Slides
          current={current}
          {...props}>
          {slides}
        </Slides>
      </Wrapper>
    </Wrapper>
  );
};

const { Story, meta } = withStory<SlidesPropsModel>({
  defaultProps: {},
  displayName: 'Slides',
  target: Component,
});

export default meta;

export { Story };
