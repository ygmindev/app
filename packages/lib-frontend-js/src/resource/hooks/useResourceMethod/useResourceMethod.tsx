import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import {
  type GraphqlFieldModel,
  type GraphqlQueryParamsFieldsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import {
  type UseResourceMethodModel,
  type UseResourceMethodParamsModel,
} from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { expandFilter } from '@lib/shared/resource/utils/expandFilter/expandFilter';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';
import { type ResourceImplementationBeforeDecoratorModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import { type ResourceInputModel } from '@lib/shared/resource/utils/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/shared/resource/utils/ResourceOutput/ResourceOutput.models';

const getConnectionFields = <TType, TRoot = undefined>(
  fields: GraphqlQueryParamsFieldsModel<TType>,
): Array<
  GraphqlFieldModel<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>
> =>
  fields.map((field) => {
    const fieldF = field as GraphqlFieldModel<
      Pick<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>, 'result'>
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
  }) as Array<
    GraphqlFieldModel<ResourceOutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>
  >;

export const useResourceMethod = <TMethod extends RESOURCE_METHOD_TYPE, TType, TRoot = undefined>({
  after,
  before,
  fields,
  method,
  name,
  root,
}: UseResourceMethodParamsModel<TMethod, TType, TRoot>): UseResourceMethodModel<
  TMethod,
  TType,
  TRoot
> => {
  const { query } = useAppGraphql();
  const nameF = `${name}${method}`;

  const fieldsF =
    method === RESOURCE_METHOD_TYPE.GET_CONNECTION
      ? getConnectionFields(fields as GraphqlQueryParamsFieldsModel<TType>)
      : fields;

  const beforeF: ResourceImplementationBeforeDecoratorModel<TMethod, TType, TRoot> = async ({
    input,
  }) => {
    let inputF = before ? await before({ input }) : input;
    if (
      method &&
      [
        RESOURCE_METHOD_TYPE.GET,
        RESOURCE_METHOD_TYPE.GET_MANY,
        RESOURCE_METHOD_TYPE.GET_CONNECTION,
        RESOURCE_METHOD_TYPE.UPDATE_MANY,
        RESOURCE_METHOD_TYPE.REMOVE,
        RESOURCE_METHOD_TYPE.SUBSCRIBE,
      ].includes(method)
    ) {
      const inputFF = inputF as unknown as ResourceInputModel<
        | RESOURCE_METHOD_TYPE.GET
        | RESOURCE_METHOD_TYPE.GET_MANY
        | RESOURCE_METHOD_TYPE.GET_CONNECTION
        | RESOURCE_METHOD_TYPE.UPDATE_MANY
        | RESOURCE_METHOD_TYPE.REMOVE
        | RESOURCE_METHOD_TYPE.SUBSCRIBE,
        TType,
        TRoot
      >;
      inputF = { ...inputFF, filter: expandFilter(inputFF?.filter) } as ResourceInputModel<
        TMethod,
        TType,
        TRoot
      >;
    }
    return inputF;
  };

  return {
    query: async (input) => {
      const inputF = await beforeF({ input });
      const rootF = inputF?.root ?? root;
      const output = (await query<
        ResourceOutputModel<TMethod, TType, TRoot>,
        { input: ResourceInputModel<TMethod, TType, TRoot> }
      >({
        fields: fieldsF as GraphqlQueryParamsFieldsModel<
          ResourceOutputModel<TMethod, TType, TRoot>
        >,
        name: nameF,
        params: { input: `${nameF}Input` },
        type: getOperationType(method),
        variables: {
          input: { ...(inputF ?? {}), root: rootF } as ResourceInputModel<TMethod, TType, TRoot>,
        },
      })) ?? { result: undefined };
      return after ? after({ input: inputF, output }) : output;
    },
  };
};
