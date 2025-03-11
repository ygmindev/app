import { type ResourceClassModel } from '@lib/backend/resource/resource.models';
import { type RequestContextModel } from '@lib/config/api/api.models';
import { type GraphqlOperationTypeModel } from '@lib/shared/graphql/graphql.models';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

export type _WithResultParamsModel<TType extends unknown> = {
  Resource(): ResourceClassModel<TType>;
  filter?(params: {
    context?: RequestContextModel;
    payload?: TType extends OutputModel<ResourceMethodTypeModel, infer TResource>
      ? TResource
      : never;
  }): Promise<boolean>;
  name: string;
  operation?: GraphqlOperationTypeModel;
  topics?: Array<string>;
};

export type _WithResultModel = MethodDecorator;
