import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export interface ArgsParamsModel<TMethod extends ResourceMethodTypeModel, TType, TForm> {
  Resource: ConstructorModel<TMethod extends RESOURCE_METHOD_TYPE.CREATE ? TForm : TType>;
  method: TMethod;
  name: string;
}
