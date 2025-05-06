import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type UseTestableRelatedResourceResourceModel } from '@lib/frontend/test/hooks/useTestableRelatedResourceResource/useTestableRelatedResourceResource.models';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const useTestableRelatedResourceResource = (): UseTestableRelatedResourceResourceModel =>
  useResource<TestableRelatedResourceModel, TestableEntityResourceModel>({
    fields: [],
    name: 'relatedOneToMany',
  });
