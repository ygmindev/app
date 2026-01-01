import { type UseResourceModel } from '@lib/frontend/resource/hooks/useResource/useResource.models';
import { type TestableRelatedResourceModel } from '@lib/model/test/TestableRelatedResource/TestableRelatedResource.models';

export type UseTestableRelatedResourceResourceModel =
  UseResourceModel<TestableRelatedResourceModel>;
