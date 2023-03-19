import { withAccess } from '@lib/backend/resource/decorators/withAccess/withAccess';
import type { WithOutputParamsModel } from '@lib/backend/resource/decorators/withOutput/withOutput.models';
import { Output } from '@lib/backend/resource/utils/Output/Output';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { Mutation, Query } from 'type-graphql';

const _getOperation = (method: ResourceMethodTypeModel): typeof Mutation | typeof Query => {
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.GET_CONNECTION:
      return Query;
    case RESOURCE_METHOD_TYPE.CREATE:
    case RESOURCE_METHOD_TYPE.UPDATE:
    case RESOURCE_METHOD_TYPE.REMOVE:
      return Mutation;
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};

export const withOutput =
  <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
    name,
    method,
    Resource,
    RootResource,
    level = ACCESS_LEVEL.PUBLIC,
  }: WithOutputParamsModel<TMethod, TType, TRoot>): MethodDecorator =>
  (target, propertyKey, descriptor) => {
    const _name = `${name}${method}`;
    const _Output = Output({ Resource, RootResource, method, name: _name });

    withAccess({ level })(target, propertyKey, descriptor);
    _getOperation(method)(() => _Output || Boolean, { name: _name })(
      target,
      propertyKey,
      descriptor,
    );
  };
