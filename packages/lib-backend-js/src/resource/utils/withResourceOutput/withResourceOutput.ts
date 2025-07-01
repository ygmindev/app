import { createResourceOutput } from '@lib/backend/resource/utils/createResourceOutput/createResourceOutput';
import { withOutput } from '@lib/backend/resource/utils/withOutput/withOutput';
import {
  type WithResourceOutputModel,
  type WithResourceOutputParamsModel,
} from '@lib/backend/resource/utils/withResourceOutput/withResourceOutput.models';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';

export const withResourceOutput =
  <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
    Resource,
    RootResource,
    access = ACCESS_LEVEL.RESTRICTED,
    filter,
    method,
    name,
    operation,
    topics,
  }: WithResourceOutputParamsModel<TMethod, TType, TRoot>): WithResourceOutputModel =>
  (target, propertyKey, descriptor) => {
    const nameF = `${name}${method}`;
    const OutputF = createResourceOutput({ Resource, RootResource, method, name: nameF });
    withOutput({
      Resource: () => OutputF ?? Boolean,
      access,
      filter: filter
        ? async ({ context, payload }) => filter({ context, payload: payload as TType })
        : undefined,
      name: nameF,
      operation: operation ?? getOperationType(method),
      topics,
    })(target, propertyKey, descriptor);
  };
