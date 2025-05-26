import { _Image } from '@lib/frontend/core/components/Image/_Image';
import { type ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import { type DimensionModel, type SFCModel } from '@lib/frontend/core/core.models';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { viewStyler } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useMemo, useState } from 'react';
import { Image as ImageBase } from 'react-native';

export const Image: SFCModel<ImagePropsModel> = ({
  baseUri,
  height,
  isAutoSize,
  src,
  testID,
  width,
  ...props
}) => {
  const [dimension, dimensionSet] = useState<DimensionModel>({ height, width });
  const { styles } = useStyles({
    props: { ...props, ...dimension },
    stylers: [viewStyler],
  });
  const [current, currentSet] = useState<number>(0);
  const srcF = useMemo(() => {
    let value = isArray(src) ? src[current] : src;
    if (baseUri) {
      value = value.startsWith('/') ? trimPathname(`${uri(baseUri)}/${value}`) : value;
    }
    return value;
  }, [baseUri, current, src]);

  const handleSuccess = (): void => {
    ImageBase.getSize(srcF, (srcWidth, srcHeight) => {
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
      const dimensionF = { height: srcHeight * ratio, width: srcWidth * ratio };
      !isEqual(dimensionF, dimension) && dimensionSet(dimensionF);
    });
  };

  return (
    <_Image
      onError={isArray(src) && current < src.length - 1 ? () => currentSet(current + 1) : undefined}
      onSuccess={isAutoSize ? handleSuccess : undefined}
      src={srcF}
      style={styles}
      testID={testID}
    />
  );
};
