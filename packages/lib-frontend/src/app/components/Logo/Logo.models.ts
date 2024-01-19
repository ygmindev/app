import { type ImagePropsModel } from '@lib/frontend/core/components/Image/Image.models';
import { type SizablePropsModel } from '@lib/frontend/core/core.models';

export type LogoPropsModel = SizablePropsModel &
  Omit<ImagePropsModel, 'src'> & {
    src?: string;
  };
