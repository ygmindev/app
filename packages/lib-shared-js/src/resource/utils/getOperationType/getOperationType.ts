import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import {
  type GetOperationTypeModel,
  type GetOperationTypeParamsModel,
} from '@lib/shared/resource/utils/getOperationType/getOperationType.models';

export const getOperationType = (params: GetOperationTypeParamsModel): GetOperationTypeModel => {
  switch (params) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.GET_MANY:
    case RESOURCE_METHOD_TYPE.GET_CONNECTION:
    case RESOURCE_METHOD_TYPE.SEARCH:
      return GRAPHQL_OPERATION_TYPE.QUERY;
    case RESOURCE_METHOD_TYPE.SUBSCRIBE:
      return GRAPHQL_OPERATION_TYPE.SUBSCRIPTION;
    case RESOURCE_METHOD_TYPE.CREATE:
    case RESOURCE_METHOD_TYPE.CREATE_MANY:
    case RESOURCE_METHOD_TYPE.UPDATE:
    case RESOURCE_METHOD_TYPE.UPDATE_MANY:
    case RESOURCE_METHOD_TYPE.REMOVE:
      return GRAPHQL_OPERATION_TYPE.MUTATION;
    default:
      throw new InvalidTypeError(params, RESOURCE_METHOD_TYPE);
  }
};
