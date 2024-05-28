import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type WithAccessParamsModel } from '@lib/backend/resource/utils/withAccess/withAccess.models';
import { type GraphqlOperationTypeModel } from '@lib/shared/graphql/graphql.models';

export type WithResultParamsModel<TType extends unknown> = WithAccessParamsModel & {
  Resource(): ResourceClassModel<TType>;
  name: string;
  operation?: GraphqlOperationTypeModel;
};

export type WithResultModel = MethodDecorator;
