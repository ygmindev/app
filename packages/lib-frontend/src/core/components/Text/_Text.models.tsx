import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallableModel } from '@lib/shared/core/core.models';

export interface _TextPropsModel extends WithChildrenPropsModel<string>, WithTestIdModel {
  isEllipsis?: boolean;
  onPress?: CallableModel;
}
