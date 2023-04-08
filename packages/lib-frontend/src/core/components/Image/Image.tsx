import { _Image } from '@lib/frontend/core/components/Image/_Image';
import type { ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { shapeStyler } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import isArray from 'lodash/isArray';
import { useState } from 'react';
import { Image as ImageBase } from 'react-native';

export const Image: SFCModel<ImagePropsModel> = ({
  height,
  isAutoSize,
  src,
  testID,
  width,
  ...props
}) => {
  const [dimension, dimensionSet] = useState<DimensionModel>({ height, width });
  const { styles } = useStyles({ props: { ...props, ...dimension }, stylers: [shapeStyler] });
  const [current, currentSet] = useState<number>(0);
  const _src = isArray(src) ? src[current] : src;

  const _handleSuccess = (): void =>
    ImageBase.getSize(_src, (srcWidth, srcHeight) => {
      let ratio;
      if (width && height) {
        ratio = Math.min(width / srcWidth, height / srcHeight);
      } else if (width) {
        ratio = width / srcWidth;
      } else if (height) {
        ratio = height / srcHeight;
      } else {
        ratio = 1;
      }
      const _dimension = { height: srcHeight * ratio, width: srcWidth * ratio };
      !isEqual(_dimension, dimension) && dimensionSet(_dimension);
    });

  return (
    <_Image
      onError={isArray(src) && current < src.length - 1 ? () => currentSet(current + 1) : undefined}
      onSuccess={isAutoSize ? _handleSuccess : undefined}
      src={_src}
      style={styles}
      testID={testID}
    />
  );
};
