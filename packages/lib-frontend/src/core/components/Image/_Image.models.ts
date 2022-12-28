import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _ImagePropsModel extends WithStyleModel {
  onError?: CallableModel;
  onSuccess?: CallableModel;
  src: string;
}
