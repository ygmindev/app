import { graphqlQuerySchema } from '@lib/backend/graphql/utils/graphqlQuerySchema/graphqlQuerySchema';
import {
  type ResourceQuerySchemaModel,
  type ResourceQuerySchemaParamsModel,
} from '@lib/backend/graphql/utils/resourceQuerySchema/resourceQuerySchema.models';
import { resourceQuery } from '@lib/shared/graphql/utils/resourceQuery/resourceQuery';
import { type RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';

export const resourceQuerySchema = async <
  TMethod extends RESOURCE_METHOD_TYPE,
  TType,
  TRoot = undefined,
>({
  after,
  before,
  fields,
  input,
  method,
  name,
  root,
  schema,
}: ResourceQuerySchemaParamsModel<TMethod, TType, TRoot>): Promise<
  ResourceQuerySchemaModel<TMethod, TType, TRoot>
> =>
  resourceQuery({
    after,
    before,
    fields,
    input,
    method,
    name,
    onQuery: async ({ fields, name, operation, params, variables }) =>
      graphqlQuerySchema({
        fields,
        name,
        operation,
        params,
        schema,
        variables,
      }),
    root,
  });
