import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type DATA_TYPE } from '@lib/shared/data/data.constants';
import { type GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';

export type _WithOutputParamsModel<
  TType extends unknown,
  TData extends unknown,
  TParams extends unknown,
> = {
  isArray?: boolean;

  name: string;

  operation?: GRAPHQL_OPERATION_TYPE;

  type?: DATA_TYPE;

  Resource?(): ResourceClassModel<TType>;

  topic?(params: { args?: TParams; context?: RequestContextModel }): string;
};

export type _WithOutputModel = MethodDecorator;
