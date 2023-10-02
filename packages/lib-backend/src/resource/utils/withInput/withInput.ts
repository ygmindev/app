import { Arg as ArgDecorator } from 'type-graphql';

import { createInput } from '#lib-backend/resource/utils/createInput/createInput';
import {
  type WithInputModel,
  type WithInputParamsModel,
} from '#lib-backend/resource/utils/withInput/withInput.models';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type EntityResourceDataModel } from '#lib-shared/resource/resources/EntityResource/EntityResource.models';

export const withInput = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  Resource,
  RootResource,
  method,
  name,
}: WithInputParamsModel<TMethod, TType, TForm, TRoot>): WithInputModel => {
  const nameF = `${name}${method}`;
  const InputF = createInput({ Resource, RootResource, method, name: nameF });
  return ArgDecorator('input', () => InputF) as WithInputModel;
};
