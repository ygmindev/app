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
>({
  Resource,
  method,
  name,
}: WithInputParamsModel<TMethod, TType, TForm>): WithInputModel => {
  const nameF = `${name}${method}`;
  const InputF = createInput({ Resource, method, name: nameF });
  return ArgDecorator('input', () => InputF) as WithInputModel;
};
