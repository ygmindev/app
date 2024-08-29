import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type WrapperPropsModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<WrapperPropsModel> = {
  Component: Wrapper,
  defaultProps: {
    backgroundColor: THEME_COLOR.SECONDARY,
    children: [
      <WrapperFixture>1</WrapperFixture>,
      <WrapperFixture>2</WrapperFixture>,
      <WrapperFixture>3</WrapperFixture>,
    ],
    width: 300,
  },
  variants: [
    { props: { isFullWidth: true } },
    { props: { s: true } },
    { props: { isRow: true, s: true } },
    { props: { isAlign: true, isRow: true } },
    // {
    //   name: 'with fragment',
    //   props: {
    //     children: [
    //       <WrapperFixture>1</WrapperFixture>,
    //       <Fragment>
    //         <WrapperFixture>2</WrapperFixture>

    //         <WrapperFixture>3</WrapperFixture>

    //         <WrapperFixture>4</WrapperFixture>
    //       </Fragment>,
    //     ],
    //     s: true,
    //   },
    // },
  ],
};
