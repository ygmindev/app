import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Appear } from '@lib/frontend/core/components/Appear/Appear';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Slide } from '@lib/frontend/core/components/Slide/Slide';
import type { SlidePropsModel } from '@lib/frontend/core/components/Slide/Slide.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useState } from 'react';

const Component: SFCModel<SlidePropsModel> = (props) => {
  const [current, setCurrent] = useState<number>(0);
  const slides = [
    <WrapperFixture text="slide 1" />,
    <WrapperFixture text="slide 2" />,
    <WrapperFixture text="slide 3" />,
  ];
  return (
    <Wrapper spacing>
      <Wrapper isRowAlign>
        <Appear isVisible={current > 0}>
          <Button onPress={() => setCurrent(Math.max(current - 1, 0))}>Previous</Button>
        </Appear>
        <Appear isVisible={current < slides.length - 1}>
          <Button onPress={() => setCurrent(Math.min(current + 1, slides.length - 1))}>Next</Button>
        </Appear>
      </Wrapper>
      <Wrapper
        height={500}
        width={500}>
        <Slide
          current={current}
          {...props}>
          {slides}
        </Slide>
      </Wrapper>
    </Wrapper>
  );
};

const { Default, meta } = withStory<SlidePropsModel>({
  defaultProps: {},
  displayName: 'Slide',
  target: Component,
});

export { Default, meta as default };
