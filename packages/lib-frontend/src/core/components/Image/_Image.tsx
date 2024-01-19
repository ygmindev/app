import { type ImageProps } from 'react-native';
import { Image as NativeImage } from 'react-native';

import { type _ImagePropsModel } from '@lib/frontend/core/components/Image/_Image.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Image = composeComponent<_ImagePropsModel, ImageProps>({
  Component: NativeImage,

  getProps: ({ onError, onSuccess, src }) => ({
    onError: () => {
      onError && onError();
    },
    onLoad: () => {
      onSuccess && onSuccess();
    },
    resizeMode: 'contain',
    source: { uri: src },
  }),
});
