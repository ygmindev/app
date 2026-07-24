import { withInput } from '@lib/backend/resource/utils/withInput/withInput';
import {
  type WithResourceInputModel,
  type WithResourceInputParamsModel,
} from '@lib/backend/resource/utils/withResourceInput/withResourceInput.models';
import { ResourceInput } from '@lib/model/resource/ResourceInput/ResourceInput';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const withResourceInput = <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
  method,
  name,
  Resource,
}: WithResourceInputParamsModel<TMethod, TType>): WithResourceInputModel => {
  const nameF = `${name}${method}`;
  const InputF = ResourceInput<TMethod, TType, TRoot>({ method, name: nameF, Resource });
  return withInput({ Resource: () => InputF });
};
