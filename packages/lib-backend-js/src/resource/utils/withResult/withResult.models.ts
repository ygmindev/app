import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';

export type WithResultParamsModel<TType extends unknown> = WithAccessParamsModel & {
  Resource(): ResourceClassModel<TType>;
  name: string;
} & (
    | {
        operation?: GRAPHQL_OPERATION_TYPE.QUERY | GRAPHQL_OPERATION_TYPE.MUTATION;
        topics?: never;
      }
    | {
        operation?: GRAPHQL_OPERATION_TYPE.SUBSCRIPTION;
        topics: Array<string>;
      }
  );

export type WithResultModel = MethodDecorator;
