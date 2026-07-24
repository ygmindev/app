import { type ResourceFieldsModel } from '@lib/frontend/resource/resource.models';
import { type ResourceInputModel } from '@lib/model/resource/ResourceInput/ResourceInput.models';
import { type ResourceOutputModel } from '@lib/model/resource/ResourceOutput/ResourceOutput.models';
import { type StringKeyModel } from '@lib/shared/core/core.models';
import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import {
  type ResourceQueryModel,
  type ResourceQueryParamsModel,
} from '@lib/shared/graphql/utils/resourceQuery/resourceQuery.models';
import { RESOURCE_METHOD_TYPE } from '@lib/shared/resource/resource.models';
import { type FilterableResourceMethodTypeModel } from '@lib/shared/resource/resource.models';
import { expandFilter } from '@lib/shared/resource/utils/expandFilter/expandFilter';
import { getOperationType } from '@lib/shared/resource/utils/getOperationType/getOperationType';
import { type ResourceImplementationBeforeDecoratorModel } from '@lib/shared/resource/utils/ResourceImplementation/ResourceImplementation.models';
import uniqBy from 'lodash/uniqBy';

export const toGraphqlParamsFields = <TType>(
  fields?: ResourceFieldsModel<TType>,
): GraphqlQueryParamsFieldsModel<TType> =>
  (fields?.map((field) =>
    field.fields ? { [field.id]: toGraphqlParamsFields(field.fields) } : field.id,
  ) as GraphqlQueryParamsFieldsModel<TType>) ?? [];

export const flattenFields = <TType>(
  fields?: ResourceFieldsModel<TType>,
  prefix = '',
): Array<string> =>
  (fields ?? []).flatMap((field) => {
    const path = prefix ? `${prefix}.${field.id}` : field.id;
    return field.fields ? flattenFields(field.fields, path) : [path];
  });

export const resourceQuery = async <
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
  onQuery,
  root,
}: ResourceQueryParamsModel<TMethod, TType, TRoot>): Promise<
  ResourceQueryModel<TMethod, TType, TRoot>
> => {
  const nameF = `${name}${method}`;
  const fieldsF = toGraphqlParamsFields<TType>(
    uniqBy([{ id: '_id' as StringKeyModel<TType> }, ...(fields ?? [])], 'id'),
  );

  const beforeF: ResourceImplementationBeforeDecoratorModel<TMethod, TType, TRoot> = async ({
    input,
  }) => {
    let inputF = before ? await before({ input }) : input;
    const isGet = [RESOURCE_METHOD_TYPE.GET, RESOURCE_METHOD_TYPE.GET_MANY].includes(method);
    if (isGet || [RESOURCE_METHOD_TYPE.UPDATE_MANY, RESOURCE_METHOD_TYPE.REMOVE].includes(method)) {
      const inputFF = inputF as unknown as ResourceInputModel<
        FilterableResourceMethodTypeModel,
        TType,
        TRoot
      >;
      inputF = {
        ...inputFF,
        filter: expandFilter(inputFF?.filter),
        options: { populate: flattenFields(fields) },
      } as ResourceInputModel<TMethod, TType, TRoot>;
    }
    return inputF;
  };

  const inputF = await beforeF({ input });
  const rootF = inputF?.root ?? root;
  const output = (await onQuery<
    ResourceOutputModel<TMethod, TType, TRoot>,
    { input: ResourceInputModel<TMethod, TType, TRoot> }
  >({
    fields: [
      {
        result:
          method === RESOURCE_METHOD_TYPE.GET_MANY || method === RESOURCE_METHOD_TYPE.SEARCH
            ? [{ items: fieldsF }]
            : fieldsF,
      },
    ] as GraphqlQueryParamsFieldsModel<ResourceOutputModel<TMethod, TType, TRoot>>,
    name: nameF,
    operation: getOperationType(method),
    params: { input: `${nameF}Input` },
    variables: {
      input: { ...(inputF ?? {}), root: rootF } as ResourceInputModel<TMethod, TType, TRoot>,
    },
  })) ?? { result: undefined };
  return after ? after({ input: inputF, output }) : output;
};
