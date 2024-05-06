import { createInput } from '@lib/backend/resource/utils/createInput/createInput';
import {
  type WithInputModel,
  type WithInputParamsModel,
} from '@lib/backend/resource/utils/withInput/withInput.models';
import { withParams } from '@lib/backend/resource/utils/withParams/withParams';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export const withInput = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
  TRoot = undefined,
>({
  Resource,
  method,
  name,
}: WithInputParamsModel<TMethod, TType, TForm>): WithInputModel => {
  const nameF = `${name}${method}`;
  const InputF = createInput<TMethod, TType, TForm, TRoot>({ Resource, method, name: nameF });
  return withParams({ Resource: () => InputF });
};
