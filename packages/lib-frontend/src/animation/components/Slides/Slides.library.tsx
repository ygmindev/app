import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { type SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { withId } from '@lib/shared/core/utils/withId/withId';
import { useState } from 'react';

export const props: LibraryPropsModel<SlidesPropsModel> = {
  Component: Slides,
  Renderer: ({ ...props }) => {
    const [current, currentSet] = useState<number>(0);
    const length = props.slides?.length || 1;
    return (
      <Wrapper
        isCenter
        s>
        <Wrapper
          isAlign
          isRow>
          <Button
            elementState={current <= 0 ? ELEMENT_STATE.DISABLED : undefined}
            onPress={() => currentSet(Math.max(0, current - 1))}>
            Previous
          </Button>

          <Button
            elementState={current >= length - 1 ? ELEMENT_STATE.DISABLED : undefined}
            onPress={() => currentSet(Math.min(length - 1, current + 1))}>
            Next
          </Button>
        </Wrapper>

        <WrapperFixture backgroundColor="transparent">
          <Slides
            {...props}
            current={current}
          />
        </WrapperFixture>
      </Wrapper>
    );
  },
  category: 'animation',
  defaultProps: {
    slides: withId([
      {
        element: (
          <Wrapper
            flex
            isCenter>
            <WrapperFixture>1</WrapperFixture>
          </Wrapper>
        ),
      },
      {
        element: (
          <Wrapper
            flex
            isCenter>
            <WrapperFixture>2</WrapperFixture>
          </Wrapper>
        ),
      },
      {
        element: (
          <Wrapper
            flex
            isCenter>
            <WrapperFixture>3</WrapperFixture>
          </Wrapper>
        ),
      },
    ]),
  },
  variants: [],
};
