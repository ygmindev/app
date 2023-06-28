import type { RootParamsModel } from '#lib-backend/resource/utils/Root/Root.models';
import type { ClassModel } from '#lib-shared/core/core.models';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type ResultParamsModel<TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined> = {
  Resource: ClassModel<TType>;
  method: TMethod;
  name: string;
} & RootParamsModel<TRoot>;
