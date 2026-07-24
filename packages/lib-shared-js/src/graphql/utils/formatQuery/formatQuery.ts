import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';
import { GRAPHQL_OPERATION } from '@lib/shared/graphql/graphql.constants';
import {
  type GraphqlFragmentFieldModel,
  type FormatQueryModel,
  type FormatQueryParamsModel,
} from '@lib/shared/graphql/utils/formatQuery/formatQuery.models';
import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { gql } from 'graphql-tag';
import { print } from 'graphql/language/printer';
import isPlainObject from 'lodash/isPlainObject';
import map from 'lodash/map';
import reduce from 'lodash/reduce';
import toString from 'lodash/toString';

const getGraphqlFields = <TType extends unknown>(
  fields: GraphqlQueryParamsFieldsModel<TType> | GraphqlFragmentFieldModel<TType>,
): string =>
  (fields?.length ?? 0 > 0)
    ? `{
  ${
    isPlainObject(fields)
      ? filterNil(
          map(
            fields as GraphqlFragmentFieldModel<TType>,
            (v, k) => `... on ${k} ${getGraphqlFields(v)}`,
          ),
        ).join(' ')
      : (fields as GraphqlQueryParamsFieldsModel<TType>)
          .map((field) =>
            isPlainObject(field)
              ? map(field as object, (v, k) => ` ${k} ${getGraphqlFields(v)} `).join(' ')
              : ` ${toString(field)} `,
          )
          .join(' ')
  }
}`
    : '';

export const formatQuery = <TResult, TParams, TName extends string = string>({
  fields,
  name,
  operation = GRAPHQL_OPERATION.QUERY,
  params,
}: FormatQueryParamsModel<TResult, TParams, TName>): FormatQueryModel => {
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
  return trimDeep(
    print(
      gql`${operation} ${name}${paramsString} { ${name}${paramsKeys} ${getGraphqlFields<TResult>(fields)} }`,
    ),
  );
};
