import type { WithChildrenPropsModel } from '@lib/frontend/core/decorators/withChildrenProps/withChildrenProps.models';

export interface _FormPropsModel extends WithChildrenPropsModel {
  onSubmit?(): Promise<void>;
}
