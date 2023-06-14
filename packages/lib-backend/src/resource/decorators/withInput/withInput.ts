import { Arg as ArgDecorator } from 'type-graphql';

import type { WithInputParamsModel } from '#lib-backend/resource/decorators/withInput/withInput.models';
import { Input } from '#lib-backend/resource/utils/Input/Input';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';

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
  const InputF = Input({ Resource, RootResource, method, name: nameF });
  return ArgDecorator('input', () => InputF);
};
