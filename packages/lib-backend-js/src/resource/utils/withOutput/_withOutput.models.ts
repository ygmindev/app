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

  topics?:
    | string
    | Array<string>
    | ((params: { args?: TParams; context?: RequestContextModel }) => string | Array<string>);

  type?: DATA_TYPE;

  Resource?(): ResourceClassModel<TType>;

  filter?(params: { context?: RequestContextModel; payload?: TData }): Promise<boolean>;
};

export type _WithOutputModel = MethodDecorator;
