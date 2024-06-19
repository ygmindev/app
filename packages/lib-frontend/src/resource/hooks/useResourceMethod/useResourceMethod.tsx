import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import {
  type GraphqlFieldModel,
  type GraphqlQueryParamsFieldsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import {
  type UseResourceMethodModel,
  type UseResourceMethodParamsModel,
} from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.constants';
import { type ResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { type EntityResourceDataModel } from '@lib/shared/resource/resources/EntityResource/EntityResource.models';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';
import { type InputModel } from '@lib/shared/resource/utils/Input/Input.models';
import { type OutputModel } from '@lib/shared/resource/utils/Output/Output.models';

const getConnectionFields = <TType, TRoot = undefined>(
  fields: GraphqlQueryParamsFieldsModel<TType>,
): Array<GraphqlFieldModel<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>> =>
  fields.map((field) => {
    const fieldF = field as GraphqlFieldModel<
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
  }) as Array<GraphqlFieldModel<OutputModel<RESOURCE_METHOD_TYPE.GET_CONNECTION, TType, TRoot>>>;

export const useResourceMethod = <
  TMethod extends ResourceMethodTypeModel,
  TType,
  TForm = EntityResourceDataModel<TType>,
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
  const { query } = useAppGraphql();
  const nameF = `${name}${method}`;
  const fieldsF =
    method === RESOURCE_METHOD_TYPE.GET_CONNECTION
      ? getConnectionFields(fields as GraphqlQueryParamsFieldsModel<TType>)
      : fields;
  return {
    query: async (input) => {
      const inputF = before ? await before({ input }) : input;
      const rootF = inputF?.root ?? root;
      const output = (await query<
        { input: InputModel<TMethod, TType, TForm> },
        OutputModel<TMethod, TType, TRoot>
      >({
        fields: fieldsF as GraphqlQueryParamsFieldsModel<OutputModel<TMethod, TType, TRoot>>,
        name: nameF,
        params: { input: `${nameF}Input` },
        type: getOperationType(method),
        variables: {
          input: { ...(inputF ?? {}), root: rootF } as InputModel<TMethod, TType, TForm>,
        },
      })) ?? { result: undefined };
      return after ? after({ input: inputF, output }) : output;
    },
  };
};
