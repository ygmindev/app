import { type ResourceClassModel } from '#lib-backend/resource/resource.models';
import { createConnection } from '#lib-backend/resource/utils/createConnection/createConnection';
import {
  type CreateResultModel,
  type CreateResultParamsModel,
} from '#lib-backend/resource/utils/createResult/createResult.models';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import { type ResultModel } from '#lib-shared/resource/utils/Result/Result.models';

export const createResult = <TMethod extends ResourceMethodTypeModel, TType>({
  Resource,
  method,
  name,
}: CreateResultParamsModel<TMethod, TType>): CreateResultModel<TMethod, TType> => {
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.CREATE:
    case RESOURCE_METHOD_TYPE.UPDATE:
    case RESOURCE_METHOD_TYPE.REMOVE:
      return Resource as ResourceClassModel<ResultModel<TMethod, TType>>;
    case RESOURCE_METHOD_TYPE.GET_MANY:
      return [Resource] as ResourceClassModel<ResultModel<TMethod, TType>>;
    case RESOURCE_METHOD_TYPE.GET_CONNECTION: {
      return createConnection({ Resource, name }) as ResourceClassModel<
        ResultModel<TMethod, TType>
      >;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
