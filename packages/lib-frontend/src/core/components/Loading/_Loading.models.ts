import type { WithStyleParamsModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';

export interface _LoadingPropsModel extends WithStyleParamsModel, WithTestIdModel {
  color: string;
  size: number;
}
