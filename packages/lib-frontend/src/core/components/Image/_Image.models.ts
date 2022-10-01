import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/testing/testing.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _ImagePropsModel extends WithStyleParamsModel, WithTestIdModel {
  onError?: CallableModel;
  onSuccess?: CallableModel;
  src: string;
}
