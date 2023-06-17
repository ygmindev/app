import type { RootParamsModel } from '#lib-backend/resource/utils/Root/Root.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type ResultParamsModel<TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined> = {
  Resource: ConstructorModel<TType>;
  method: TMethod;
  name: string;
} & RootParamsModel<TRoot>;
