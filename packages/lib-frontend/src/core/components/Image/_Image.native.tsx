import type { _ImagePropsModel } from '@lib/frontend/core/components/Image/_Image.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { FastImageProps } from 'react-native-fast-image';
import FastImage from 'react-native-fast-image';

export const _Image = composeComponent<_ImagePropsModel, FastImageProps>({
  getComponent: () => FastImage,

  getProps: ({ onError, onSuccess, src }) => ({
    onError,
    onLoad: onSuccess,
    resizeMode: 'contain',
    source: { uri: src },
  }),
});
