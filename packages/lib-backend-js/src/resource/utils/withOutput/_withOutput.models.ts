import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type DataTypeModel } from '@lib/shared/data/data.models';
import { type GraphqlOperationTypeModel } from '@lib/shared/graphql/graphql.models';

export type _WithOutputParamsModel<TType extends unknown, TData extends unknown> = {
  Resource?(): ResourceClassModel<TType>;
  filter?(params: { context?: RequestContextModel; payload?: TData }): Promise<boolean>;
  isArray?: boolean;
  name: string;
  operation?: GraphqlOperationTypeModel;
  topics?: Array<string>;
  type?: DataTypeModel;
};

export type _WithOutputModel = MethodDecorator;
