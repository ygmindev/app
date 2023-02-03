import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { Fragment } from 'react';

export const props: LibraryPropsModel<WrapperPropsModel> = {
  Component: Wrapper,
  defaultProps: {
    backgroundColor: THEME_COLOR.SECONDARY,
    children: [
      <WrapperFixture text="1" />,
      <WrapperFixture text="2" />,
      <WrapperFixture text="3" />,
    ],
    width: 300,
  },
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
  ],
};
