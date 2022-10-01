import type { ResourceConstructorModel } from '@lib/backend/resource/resource.models';
import { Connection } from '@lib/backend/resource/utils/Connection/Connection';
import type { ResultParamsModel } from '@lib/backend/resource/utils/Result/Result.models';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { ResultModel } from '@lib/shared/resource/utils/Result/Result.models';

export const Result = <TMethod extends ResourceMethodTypeModel, TType>({
  Resource,
  method,
  name,
}: ResultParamsModel<TMethod, TType>): ResourceConstructorModel<ResultModel<TMethod, TType>> => {
  switch (method) {
    case RESOURCE_METHOD_TYPE.GET:
    case RESOURCE_METHOD_TYPE.CREATE:
    case RESOURCE_METHOD_TYPE.UPDATE:
    case RESOURCE_METHOD_TYPE.REMOVE:
      return Resource as ResourceConstructorModel<ResultModel<TMethod, TType>>;
    case RESOURCE_METHOD_TYPE.GET_MANY:
      return [Resource] as ResourceConstructorModel<ResultModel<TMethod, TType>>;
    case RESOURCE_METHOD_TYPE.GET_CONNECTION: {
      return Connection({ Resource, name }) as ResourceConstructorModel<
        ResultModel<TMethod, TType>
      >;
    }
    default:
      throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
  }
};
