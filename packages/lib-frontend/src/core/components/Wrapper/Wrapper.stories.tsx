import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { Fragment } from 'react';

const { Story, meta } = withStory<WrapperPropsModel>({
  defaultProps: {
    backgroundColor: 'secondary',
    children: [
      <WrapperFixture text="1" />,
      <WrapperFixture text="2" />,
      <WrapperFixture text="3" />,
    ],
    width: 300,
  },
  target: Wrapper,
  variants: [
    { props: { isFullWidth: true } },
    { props: { spacing: true } },
    { props: { isRow: true, spacing: true } },
    {
      name: 'with fragment',
      props: {
        children: [
          <WrapperFixture text="1" />,
          <Fragment>
            <WrapperFixture text="2" />

            <WrapperFixture text="3" />

            <WrapperFixture text="4" />
          </Fragment>,
        ],
        spacing: true,
      },
    },
    { props: { isReverse: true } },
  ],
});

export { Story, meta as default };
