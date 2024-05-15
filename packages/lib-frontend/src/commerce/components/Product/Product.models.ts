import { type AsyncTextModel } from '@lib/frontend/core/core.models';

export type ProductPropsModel = {
  images: Array<string>;
  subTitle?: AsyncTextModel;
  title: AsyncTextModel;
};
