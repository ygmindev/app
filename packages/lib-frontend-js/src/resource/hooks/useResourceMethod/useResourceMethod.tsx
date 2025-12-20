import { useAppGraphql } from '@lib/frontend/data/hooks/useAppGraphql/useAppGraphql';
import { type GraphqlQueryParamsFieldsModel } from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import {
  type UseResourceMethodModel,
  type UseResourceMethodParamsModel,
} from '@lib/frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type ResourceFieldsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { expandFilter } from '@lib/shared/resource/utils/expandFilter/expandFilter';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';
import { type ResourceImplementationBeforeDecoratorModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import uniqBy from 'lodash/uniqBy';

export const toGraphqlParamsFields = <TType,>(
  fields?: ResourceFieldsModel<TType>,
): GraphqlQueryParamsFieldsModel<TType> =>
  (fields?.map((field) =>
    field.fields ? { [field.id]: toGraphqlParamsFields(field.fields) } : field.id,
  ) as GraphqlQueryParamsFieldsModel<TType>) ?? [];

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
  const fieldsF = toGraphqlParamsFields<TType>(
    uniqBy([{ id: '_id' as StringKeyModel<TType> }, ...(fields ?? [])], 'id'),
  );

  const beforeF: ResourceImplementationBeforeDecoratorModel<TMethod, TType, TRoot> = async ({
    input,
  }) => {
    let inputF = before ? await before({ input }) : input;
    if (
      method &&
      [
        RESOURCE_METHOD_TYPE.GET,
        RESOURCE_METHOD_TYPE.GET_MANY,
        RESOURCE_METHOD_TYPE.UPDATE_MANY,
        RESOURCE_METHOD_TYPE.REMOVE,
      ].includes(method)
    ) {
      const inputFF = inputF as unknown as ResourceInputModel<
        | RESOURCE_METHOD_TYPE.GET
        | RESOURCE_METHOD_TYPE.GET_MANY
        | RESOURCE_METHOD_TYPE.UPDATE_MANY
        | RESOURCE_METHOD_TYPE.REMOVE,
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
        fields: [
          { result: method === RESOURCE_METHOD_TYPE.GET_MANY ? [{ items: fieldsF }] : fieldsF },
        ] as GraphqlQueryParamsFieldsModel<ResourceOutputModel<TMethod, TType, TRoot>>,
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
