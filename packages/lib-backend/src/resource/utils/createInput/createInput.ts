import { createArgs } from '#lib-backend/resource/utils/createArgs/createArgs';
import {
  type CreateInputModel,
  type CreateInputParamsModel,
} from '#lib-backend/resource/utils/createInput/createInput.models';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export const createInput = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
>({
  Resource,
  RootResource,
  method,
  name,
}: CreateInputParamsModel<TMethod, TType, TForm, TRoot>): CreateInputModel<
  TMethod,
  TType,
  TForm
> => {
  const Args = createArgs({ Resource, RootResource, method, name });
  @withEntity({ name })
  class Input extends Args {}
  return Input as unknown as CreateInputModel<TMethod, TType, TForm>;
};
