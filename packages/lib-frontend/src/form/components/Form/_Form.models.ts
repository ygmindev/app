import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';

export interface _FormPropsModel extends WithChildrenPropsModel {
  onSubmit?: CallablePromiseModel;
}
