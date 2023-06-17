import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { CallablePromiseModel } from '#lib-shared/core/core.models';

export type _FormPropsModel = {
  onSubmit?: CallablePromiseModel;
} & ChildrenPropsModel;
