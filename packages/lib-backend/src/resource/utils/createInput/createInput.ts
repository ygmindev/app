import { createArgs } from '@lib/backend/resource/utils/createArgs/createArgs';
import {
  type CreateInputModel,
  type CreateInputParamsModel,
} from '@lib/backend/resource/utils/createInput/createInput.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export const createInput = <TMethod extends ResourceMethodTypeModel, TType, TForm, TRoot>({
  Resource,
  method,
  name,
}: CreateInputParamsModel<TMethod, TType, TForm>): CreateInputModel<
  TMethod,
  TType,
  TForm,
  TRoot
> => {
  const Args = createArgs<TMethod, TType, TForm, TRoot>({ Resource, method, name });
  @withEntity({ name })
  class Input extends Args {}
  return Input as unknown as CreateInputModel<TMethod, TType, TForm, TRoot>;
};
