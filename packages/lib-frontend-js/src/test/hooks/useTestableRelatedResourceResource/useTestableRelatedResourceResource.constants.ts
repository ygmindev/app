import { type GraphqlQueryParamsFieldsModel } from '@lib/shared/graphql/utils/graphqlQuery/graphqlQuery.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export const TESTABLE_RELATED_RESOURCE_FIELDS = [
  '_id',
] satisfies GraphqlQueryParamsFieldsModel<TestableRelatedResourceModel>;
