import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { WithTestIdModel } from '@lib/frontend/test/test.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _FormPropsModel extends WithTestIdModel, WithChildrenPropsModel {
  onSubmit?: CallablePromiseModel;
}
