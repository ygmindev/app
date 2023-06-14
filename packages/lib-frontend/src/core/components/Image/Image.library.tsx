import { Image } from '#lib-frontend/core/components/Image/Image';
import type { ImagePropsModel } from '#lib-frontend/core/components/Image/Image.models';
import { APP_URI } from '#lib-frontend/http/http.constants';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ImagePropsModel> = {
  Component: Image,
  defaultProps: { src: `${APP_URI}/images/logos/logo.png` },
  variants: [
    { props: { height: 50, width: 50 } },
    { props: { isAutoSize: true, width: 100 } },
    { props: { height: 100, isAutoSize: true } },
  ],
};
