import { type _ImagePropsModel } from '@lib/frontend/core/components/Image/_Image.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';

export const _Image = composeComponent<_ImagePropsModel, React.ImgHTMLAttributes<HTMLImageElement>>(
  {
    Component: 'img',

    getProps: ({ onError, onSuccess, src }) => ({
      onError: () => {
        onError && onError();
      },
      onLoad: () => {
        onSuccess && onSuccess();
      },
      src,
    }),

    isWeb: true,
  },
);
