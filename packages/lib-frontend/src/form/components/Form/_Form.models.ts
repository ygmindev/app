import type { ChildrenPropsModel } from '#lib-frontend/core/core.models';
import type { CallableModel } from '#lib-shared/core/core.models';

export type _FormPropsModel = {
  onSubmit?: CallableModel;
} & ChildrenPropsModel;
