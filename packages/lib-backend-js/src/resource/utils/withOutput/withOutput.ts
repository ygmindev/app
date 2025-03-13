import { createOutput } from '@lib/backend/resource/utils/createOutput/createOutput';
import {
  type WithOutputModel,
  type WithOutputParamsModel,
} from '@lib/backend/resource/utils/withOutput/withOutput.models';
import { withResult } from '@lib/backend/resource/utils/withResult/withResult';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';

export const withOutput =
  <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
    Resource,
    RootResource,
    access = ACCESS_LEVEL.RESTRICTED,
    filter,
    method,
    name,
    topics,
  }: WithOutputParamsModel<TMethod, TType, TRoot>): WithOutputModel =>
  (target, propertyKey, descriptor) => {
    const nameF = `${name}${method}`;
    const OutputF = createOutput({ Resource, RootResource, method, name: nameF });
    withResult({
      Resource: () => OutputF ?? Boolean,
      access,
      filter: filter
        ? async ({ context, payload }) => filter({ context, payload: payload as TType })
        : undefined,
      name: nameF,
      operation: getOperationType(method),
      topics,
    })(target, propertyKey, descriptor);
  };
