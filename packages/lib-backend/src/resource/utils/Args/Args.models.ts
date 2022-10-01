import type { ConstructorModel } from '@lib/shared/core/core.models';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export interface ArgsParamsModel<TMethod extends ResourceMethodTypeModel, TType> {
  Resource: ConstructorModel<TType>;
  method: TMethod;
  name: string;
}
