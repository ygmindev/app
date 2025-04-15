import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { TESTABLE_RELATED_RESOURCE_FIELDS } from '@lib/frontend/test/hooks/useTestableRelatedResourceResource/useTestableRelatedResourceResource.constants';
import { type UseTestableRelatedResourceResourceModel } from '@lib/frontend/test/hooks/useTestableRelatedResourceResource/useTestableRelatedResourceResource.models';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_NAME } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const useTestableRelatedResourceResource = (): UseTestableRelatedResourceResourceModel =>
  useResource<TestableRelatedResourceModel>({
    fields: [{ result: TESTABLE_RELATED_RESOURCE_FIELDS }],
    name: TESTABLE_RELATED_RESOURCE_RESOURCE_NAME,
  });
