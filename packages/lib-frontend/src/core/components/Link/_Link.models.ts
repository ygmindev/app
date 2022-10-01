import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleParamsModel } from '@lib/frontend/styling/decorators/withStyle/withStyle.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _LinkPropsModel extends WithStyleParamsModel, WithChildrenPropsModel {
  isNewTab?: boolean;
  onPress?: CallableModel;
  pathname?: string;
}
