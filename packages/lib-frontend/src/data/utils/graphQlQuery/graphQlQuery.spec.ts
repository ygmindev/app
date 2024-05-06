import { graphQlQuery } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery';
import { type GraphQlQueryParamsModel } from '@lib/frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { trimDeep } from '@lib/shared/core/utils/trimDeep/trimDeep';
import { GRAPHQL_OPERATION_TYPE } from '@lib/shared/graphql/graphql.constants';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { withTest } from '@lib/shared/test/utils/withTest/withTest';

const { displayName } = withTest({ graphQlQuery });

describe(displayName, () => {
  test('works without params', async () => {
    const PARAMS: GraphQlQueryParamsModel<void, TestableEntityResourceModel> = {
      fields: ['_id', 'created'],
      name: 'NAME',
      type: GRAPHQL_OPERATION_TYPE.QUERY,
    };
    const result = graphQlQuery(PARAMS);
    const expected = trimDeep(`query NAME {
      NAME {
        _id
        created
      }
    }`);
    expect(result).toStrictEqual(expected);
  });

  test('works with params', async () => {
    const PARAMS: GraphQlQueryParamsModel<{ a: string; b: string }, TestableEntityResourceModel> = {
      fields: ['_id', 'created'],
      name: 'NAME',
      params: { a: 'A', b: 'B' },
      type: GRAPHQL_OPERATION_TYPE.QUERY,
    };
    const result = graphQlQuery(PARAMS);
    const expected = trimDeep(`query NAME($a: A!, $b: B!) {
      NAME(a: $a, b: $b) {
        _id
        created
      }
    }`);
    expect(result).toStrictEqual(expected);
  });
});
