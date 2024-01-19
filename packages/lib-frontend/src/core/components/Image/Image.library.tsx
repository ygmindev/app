import { Image } from '@lib/frontend/core/components/Image/Image';
import { type ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ImagePropsModel> = {
  Component: Image,
  defaultProps: { src: '/images/logos/logo.png' },
  variants: [
    { props: { height: 50, width: 50 } },
    { props: { isAutoSize: true, width: 100 } },
    { props: { height: 100, isAutoSize: true } },
  ],
};
