import { _Image } from '@lib/frontend/core/components/Image/_Image';
import type { ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import type { DimensionModel } from '@lib/frontend/platform/platform.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { shapeStyler } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler';
import { isArray } from 'lodash';
import { useCallback, useState } from 'react';
import type { ImageStyle } from 'react-native';
import { Image as ImageBase } from 'react-native';

export const Image: SFCModel<ImagePropsModel> = ({
  height,
  isAutoSize,
  src,
  testID,
  width,
  ...props
}) => {
  const [dimension, setDimension] = useState<DimensionModel>({ height, width });
  const { styles } = useStyles({ props: { ...props, ...dimension }, stylers: [shapeStyler] });
  const [current, setCurrent] = useState<number>(0);
  const _src = isArray(src) ? src[current] : src;

  const _handleSuccess = useCallback(
    () =>
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
        setDimension({ height: srcHeight * ratio, width: srcWidth * ratio });
      }),
    [],
  );

  return (
    <_Image
      onError={isArray(src) && current < src.length - 1 ? () => setCurrent(current + 1) : undefined}
      onSuccess={isAutoSize ? _handleSuccess : undefined}
      src={_src}
      style={styles as ImageStyle}
      testID={testID}
    />
  );
};
