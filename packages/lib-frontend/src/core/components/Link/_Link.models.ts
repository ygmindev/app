import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithStyleModel } from '@lib/frontend/style/decorators/withStyle/withStyle.models';
import type { StyleModel } from '@lib/frontend/style/style.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _LinkPropsModel extends WithStyleModel, WithChildrenPropsModel {
  isNewTab?: boolean;
  onPress?: CallableModel;
  pathname?: string;
  style?: StyleModel;
}
