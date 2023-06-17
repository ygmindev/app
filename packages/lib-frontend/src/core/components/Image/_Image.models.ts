import type { CallableModel } from '#lib-shared/core/core.models';

export type _ImagePropsModel = {
  onError?: CallableModel;
  onSuccess?: CallableModel;
  src: string;
};
