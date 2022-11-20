import { useGraphQl } from '@lib/frontend/graphql/hooks/useGraphQl/useGraphQl';
import type { GraphQlFieldModel } from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import type {
  UseResourceMethodModel,
  UseResourceMethodParamsModel,
} from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { InvalidTypeError } from '@lib/shared/core/errors/InvalidTypeError/InvalidTypeError';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import type { ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import type { InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import type { OutputModel } from '@lib/shared/resource/utils/Output/Output.models';
import type { ResultModel } from '@lib/shared/resource/utils/Result/Result.models';

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
}: UseResourceMethodParamsModel<TMethod, TType, TForm, TRoot>): UseResourceMethodModel<
  TMethod,
  TType,
  TForm,
  TRoot
> => {
  const { isLoading, query } = useGraphQl();

  const _name = `${name}${method}`;
  const _type = (() => {
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
  const _fields = (
    method === RESOURCE_METHOD_TYPE.GET_CONNECTION
      ? fields.map((field) => {
          const _field = field as GraphQlFieldModel<
            Record<'result', ResultModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType>>
          >;
          return _field?.result
            ? {
                ..._field,
                result: [
                  { edges: ['cursor', { node: _field.result }] },
                  {
                    pageInfo: ['endCursor', 'hasNextPage', 'hasPreviousPage', 'startCursor'],
                  },
                ],
              }
            : field;
        })
      : fields
  ) as Array<GraphQlFieldModel<OutputModel<TMethod, TType, TRoot>>>;

  return {
    isLoading,

    query: async (input) => {
      const _input = before ? await before({ input }) : input;
      const output = (await query<
        { input: InputModel<TMethod, TType, TForm, TRoot> },
        OutputModel<TMethod, TType, TRoot>
      >({
        fields: _fields,
        name: _name,
        params: { input: `${_name}Input` },
        type: _type,
        variables: { input: _input },
      })) || { result: undefined, root: _input.root };
      return after ? await after({ output }) : output;
    },
  };
};
