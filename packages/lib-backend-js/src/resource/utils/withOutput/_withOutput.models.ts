import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type DATA_TYPE } from '@lib/shared/data/data.constants';
import { type GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export type _WithOutputParamsModel<TType extends unknown> = {
  isArray?: boolean;

  name: string;

  operation?: GRAPHQL_OPERATION_TYPE;

  type?: DATA_TYPE;

  Resource?(): ResourceClassModel<TType>;

  topic?(
    input?: ResourceInputModel<RESOURCE_METHOD_TYPE.SUBSCRIBE, TType>,
    context?: RequestContextModel,
  ): string;
};

export type _WithOutputModel = MethodDecorator;
