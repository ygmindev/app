import { type _ImagePropsModel } from '@lib/frontend/core/components/Image/_Image.models';
import { type DimensionModel } from '@lib/frontend/core/core.models';
import { type ViewStylerParamsModel } from '@lib/frontend/style/utils/styler/viewStyler/viewStyler.models';
import { type UriModel } from '@lib/shared/route/route.models';

export type ImagePropsModel = ViewStylerParamsModel &
  Omit<_ImagePropsModel, 'src'> &
  DimensionModel & {
    baseUri?: UriModel;
    isAutoSize?: boolean;
    src: string | Array<string>;
  };
