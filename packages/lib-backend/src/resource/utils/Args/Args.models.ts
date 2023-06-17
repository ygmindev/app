import type { RootParamsModel } from '#lib-backend/resource/utils/Root/Root.models';
import type { ConstructorModel } from '#lib-shared/core/core.models';
import type { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export type ArgsParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> = {
  Resource?: ConstructorModel<TMethod extends RESOURCE_METHOD_TYPE.CREATE ? TForm : TType>;
  method: TMethod;
  name: string;
} & RootParamsModel<TRoot>;
