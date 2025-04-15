import { createResourceArgs } from '@lib/backend/resource/utils/createResourceArgs/createResourceArgs';
import {
  type CreateResourceInputModel,
  type CreateResourceInputParamsModel,
} from '@lib/backend/resource/utils/createResourceInput/createResourceInput.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

export const createResourceInput = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TRoot = undefined,
>({
  Resource,
  method,
  name,
}: CreateResourceInputParamsModel<TMethod, TType>): CreateResourceInputModel<
  TMethod,
  TType,
  TRoot
> => {
  const Args = createResourceArgs<TMethod, TType, TRoot>({ Resource, method, name });
  @withEntity({ name })
  class Input extends Args {}
  return Input as unknown as CreateResourceInputModel<TMethod, TType, TRoot>;
};
