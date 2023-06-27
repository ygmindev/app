import { useAppGraphQl } from '#lib-frontend/http/hooks/useAppGraphQl/useAppGraphQl';
import type {
  GraphQlFieldModel,
  GraphQlQueryParamsFieldsModel,
} from '#lib-frontend/http/utils/graphQlQuery/graphQlQuery.models';
import type {
  UseResourceMethodModel,
  UseResourceMethodParamsModel,
} from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { InvalidTypeError } from '#lib-shared/core/errors/InvalidTypeError/InvalidTypeError';
import { GRAPHQL_OPERATION_TYPE } from '#lib-shared/graphql/graphql.constants';
import { RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '#lib-shared/resource/resource.models';
import type { InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import type { OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

const getConnectionFields = <TType, TRoot = undefined>(
  fields: GraphQlQueryParamsFieldsModel<TType, false>,
): Array<GraphQlFieldModel<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>> =>
  fields.map((field) => {
    const fieldF = field as GraphQlFieldModel<
      Pick<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>, 'result'>
    >;
    return fieldF?.result
      ? {
          ...fieldF,
          result: [
            { edges: ['cursor', { node: fieldF.result }] },
            { pageInfo: ['endCursor', 'hasNextPage', 'hasPreviousPage', 'startCursor'] },
          ],
        }
      : field;
  }) as Array<GraphQlFieldModel<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>>;

export const useResourceMethod = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm,
  TRoot = undefined,
>({
  after,
  before,
  fields,
  method,
  name,
  root,
}: UseResourceMethodParamsModel<TMethod, TType, TForm, TRoot>): UseResourceMethodModel<
  TMethod,
  TType,
  TForm,
  TRoot
> => {
  const { query } = useAppGraphQl();

  const nameF = `${name}${method}`;
  const type = (() => {
    switch (method) {
      case RESOURCE_METHOD_TYPE.GET:
      case RESOURCE_METHOD_TYPE.GET_MANY:
      case RESOURCE_METHOD_TYPE.GET_CONNECTION:
        return GRAPHQL_OPERATION_TYPE.QUERY;
      case RESOURCE_METHOD_TYPE.CREATE:
      case RESOURCE_METHOD_TYPE.UPDATE:
      case RESOURCE_METHOD_TYPE.REMOVE:
        return GRAPHQL_OPERATION_TYPE.MUTATION;
      default:
        throw new InvalidTypeError(method, RESOURCE_METHOD_TYPE);
    }
  })();

  const fieldsF =
    method === RESOURCE_METHOD_TYPE.GET_CONNECTION
      ? getConnectionFields(fields as GraphQlQueryParamsFieldsModel<TType, false>)
      : fields;

  return {
    query: async (input) => {
      const inputF = before ? await before({ input }) : input;
      const rootF = inputF.root || root;
      const output = (await query<
        { input: InputModel<TMethod, TType, TForm, TRoot> },
        OutputModel<TMethod, TType, TRoot>
      >({
        fields: fieldsF as GraphQlQueryParamsFieldsModel<OutputModel<TMethod, TType, TRoot>>,
        name: nameF,
        params: { input: `${nameF}Input` },
        type,
        variables: { input: { ...inputF, root: rootF } },
      })) || { result: undefined, root: rootF };
      return after ? after({ output }) : output;
    },
  };
};
