import { print } from 'graphql/language/printer';
import { gql } from 'graphql-tag';
import isPlainObject from 'lodash/isPlainObject';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

import {
  type GraphQlFragmentFieldModel,
  type GraphQlQueryModel,
  type GraphQlQueryParamsFieldsModel,
  type GraphQlQueryParamsModel,
} from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';

const getGraphQlFields = <TType extends unknown>(
  fields: GraphQlQueryParamsFieldsModel<TType> | GraphQlFragmentFieldModel<TType>,
): string => `{
  ${
    isPlainObject(fields)
      ? map(
          fields as GraphQlFragmentFieldModel<TType>,
          (v, k) => `... on ${k} ${getGraphQlFields(v)}`,
        ).join(' ')
      : (fields as GraphQlQueryParamsFieldsModel<TType>)
          .map((field) =>
            isPlainObject(field)
              ? map(field as object, (v, k) => ` ${k} ${getGraphQlFields(v)} `).join(' ')
              : ` ${String(field)} `,
          )
          .join(' ')
  }
}`;

export const graphQlQuery = <TParams, TResult, TName extends string>({
  fields,
  name,
  params,
  type,
}: GraphQlQueryParamsModel<TParams, TResult, TName>): GraphQlQueryModel => {
  let [paramsString, paramsKeys] = ['', ''];
  if (params) {
    paramsString = `(${reduce(
      params,
      (result, v, k) => (v ? [...result, `$${k}: ${v}!`] : result),
      [] as Array<string>,
    ).join(', ')})`;
    paramsKeys = `(${Object.keys(params)
      .map((k) => `${k}: $${k}`)
      .join(', ')})`;
  }
  return print(gql`
    ${trimDeep(`${type} ${name}${paramsString} {
      ${name}${paramsKeys} ${getGraphQlFields<TResult>(fields)}
    }`)}
  `);
};
