import type {
  GraphQlFieldModel,
  GraphQlQueryParamsModel,
} from '@lib/frontend/graphql/utils/graphQlQuery/graphQlQuery.models';
import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';
import { isPlainObject, map } from 'lodash';

const _getGraphQlFields = <TType>(fields: Array<GraphQlFieldModel<TType>>): string => `{
  ${fields
    .map((field) =>
      isPlainObject(field)
        ? map(field as object, (v, k) => ` ${k} ${_getGraphQlFields(v)} `).join(' ')
        : ` ${String(field)} `,
    )
    .join(' ')}
}`;

export const graphQlQuery = <TParams, TResult, TName extends string>({
  fields,
  name,
  params,
  type,
}: GraphQlQueryParamsModel<TParams, TResult, TName>): string => {
  let [paramsString, paramsKeys] = ['', ''];
  if (params) {
    paramsString = `(${map(params, (v, k) => `$${k}: ${v}!`).join(', ')})`;
    paramsKeys = `(${Object.keys(params)
      .map((k) => `${k}: $${k}`)
      .join(', ')})`;
  }
  return trimDeep(
    `${type} ${name}${paramsString} {
      ${name}${paramsKeys} ${_getGraphQlFields<TResult>(fields)}
    }`,
  );
};
