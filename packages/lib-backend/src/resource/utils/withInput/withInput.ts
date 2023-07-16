import { Arg as ArgDecorator } from 'type-graphql';

import { createInput } from '#lib-backend/resource/utils/createInput/createInput';
import { type WithInputParamsModel } from '#lib-backend/resource/utils/withInput/withInput.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

export const withInput = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
>({
  Resource,
  RootResource,
  method,
  name,
}: WithInputParamsModel<TMethod, TType, TForm, TRoot>): ParameterDecorator => {
  const nameF = `${name}${method}`;
  const InputF = createInput({ Resource, RootResource, method, name: nameF });
  return ArgDecorator('input', () => InputF);
};