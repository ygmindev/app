import { Logo } from '@lib-frontend/app/components/Logo/Logo';
import { Tile } from '@lib-frontend/core/components/Tile/Tile';
import { type TilePropsModel } from '@lib-frontend/core/components/Tile/Tile.models';
import { WrapperFixture } from '@lib-frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TilePropsModel> = {
  Component: Tile,
  defaultProps: {
    description: 'description',
    icon: 'personCircle',
    preview: <Logo />,
    title: 'title',
  },
  variants: [
    {
      props: {
        children: <WrapperFixture />,
        onPress: () => null,
      },
    },
  ],
};
