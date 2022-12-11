import type { RootParamsModel } from '@lib/backend/resource/utils/Root/Root.models';
import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export interface ArgsParamsModel<
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
> extends RootParamsModel<TRoot> {
  Resource?: ConstructorModel<TMethod extends RESOURCE_METHOD_TYPE.CREATE ? TForm : TType>;
  method: TMethod;
  name: string;
}
