import type { CallableModel } from '#lib-shared/core/core.models';

export interface _ImagePropsModel {
  onError?: CallableModel;
  onSuccess?: CallableModel;
  src: string;
}
