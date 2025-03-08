import {
  type GraphqlFragmentFieldModel,
  type GraphqlQueryModel,
  type GraphqlQueryParamsFieldsModel,
  type GraphqlQueryParamsModel,
} from '@lib/frontend/data/utils/graphqlQuery/graphqlQuery.models';
import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';
import { print } from 'graphql/language/printer';
import { gql } from 'graphql-tag';
import isPlainObject from 'lodash/isPlainObject';
import map from 'lodash/map';
import reduce from 'lodash/reduce';

const getGraphqlFields = <TType extends unknown>(
  fields: GraphqlQueryParamsFieldsModel<TType> | GraphqlFragmentFieldModel<TType>,
): string => `{
  ${
    isPlainObject(fields)
      ? map(
          fields as GraphqlFragmentFieldModel<TType>,
          (v, k) => `... on ${k} ${getGraphqlFields(v)}`,
        ).join(' ')
      : (fields as GraphqlQueryParamsFieldsModel<TType>)
          .map((field) =>
            isPlainObject(field)
              ? map(field as object, (v, k) => ` ${k} ${getGraphqlFields(v)} `).join(' ')
              : ` ${String(field)} `,
          )
          .join(' ')
  }
}`;

export const graphqlQuery = <TParams, TResult, TName extends string>({
  fields,
  name,
  params,
  type,
}: GraphqlQueryParamsModel<TParams, TResult, TName>): GraphqlQueryModel => {
  let [paramsString, paramsKeys] = ['', ''];
  if (params) {
    paramsString = `(${reduce(
      params,
      (result, v, k) => (v ? [...result, `$${k}: ${v}`] : result),
      [] as Array<string>,
    ).join(', ')})`;
    paramsKeys = `(${Object.keys(params)
      .map((k) => `${k}: $${k}`)
      .join(', ')})`;
  }
  return print(gql`
    ${trimDeep(
      `${type} ${name}${paramsString} { ${name}${paramsKeys} ${getGraphqlFields<TResult>(fields)} }`,
    )}
  `);
};
