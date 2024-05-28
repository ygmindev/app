// import { Mutation, Query } from 'type-graphql';

// import { createOutput } from '@lib/backend/resource/utils/createOutput/createOutput';
// import { withAccess } from '@lib/backend/resource/utils/withAccess/withAccess';
// import {
//   type WithOutputModel,
//   type WithOutputParamsModel,
// } from '@lib/backend/resource/utils/withOutput/withOutput.models';
// import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
// import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
// import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
// import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

// const getOperation = (method: ResourceMethodTypeModel): typeof Mutation | typeof Query => {
//   switch (method) {
//     case RESOURCE_METHOD_TYPE.GET:
//     case RESOURCE_METHOD_TYPE.GET_MANY:
//     case RESOURCE_METHOD_TYPE.GET_CONNECTION:
//       return Query;
//     case RESOURCE_METHOD_TYPE.CREATE:
//     case RESOURCE_METHOD_TYPE.CREATE_MANY:
//     case RESOURCE_METHOD_TYPE.UPDATE:
//     case RESOURCE_METHOD_TYPE.REMOVE:
//       return Mutation;
//     default:
//       throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
//   }
// };

// export const withOutput =
//   <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
//     Resource,
//     RootResource,
//     level = ACCESS_LEVEL.PUBLIC,
//     method,
//     name,
//   }: WithOutputParamsModel<TMethod, TType, TRoot>): WithOutputModel =>
//   (target, propertyKey, descriptor) => {
//     const nameF = `${name}${method}`;
//     const OutputF = createOutput({ Resource, RootResource, method, name: nameF });
//     withAccess({ level })(target, propertyKey, descriptor);
//     getOperation(method)(() => OutputF ?? Boolean, { name: nameF })(
//       target,
//       propertyKey,
//       descriptor,
//     );
//   };

import { createOutput } from '@lib/backend/resource/utils/createOutput/createOutput';
import {
  type WithOutputModel,
  type WithOutputParamsModel,
} from '@lib/backend/resource/utils/withOutput/withOutput.models';
import { withResult } from '@lib/backend/resource/utils/withResult/withResult';
import { ACCESS_LEVEL } from '@lib/shared/auth/resources/Access/Access.constants';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { type GraphqlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';

const getOperation = (method: ResourceMethodTypeModel): GraphqlOperationTypeModel => {
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.GET_CONNECTION:
      return GRAPHQL_OPERATION_TYPE.QUERY;
    case RESOURCE_METHOD_TYPE.CREATE:
    case RESOURCE_METHOD_TYPE.CREATE_MANY:
    case RESOURCE_METHOD_TYPE.UPDATE:
    case RESOURCE_METHOD_TYPE.REMOVE:
      return GRAPHQL_OPERATION_TYPE.MUTATION;
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};

export const withOutput =
  <TMethod extends ResourceMethodTypeModel, TType, TRoot = undefined>({
    Resource,
    RootResource,
    level = ACCESS_LEVEL.PUBLIC,
    method,
    name,
  }: WithOutputParamsModel<TMethod, TType, TRoot>): WithOutputModel =>
  (target, propertyKey, descriptor) => {
    const nameF = `${name}${method}`;
    const OutputF = createOutput({ Resource, RootResource, method, name: nameF });
    withResult({
      Resource: () => OutputF ?? Boolean,
      level,
      name: nameF,
      operation: getOperation(method),
    })(target, propertyKey, descriptor);
  };
