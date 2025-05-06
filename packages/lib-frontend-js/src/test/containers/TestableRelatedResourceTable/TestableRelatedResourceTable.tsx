import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type TestableRelatedResourceTablePropsModel } from '@lib/frontend/test/containers/TestableRelatedResourceTable/TestableRelatedResourceTable.models';
import { useTestableRelatedResourceResource } from '@lib/frontend/test/hooks/useTestableRelatedResourceResource/useTestableRelatedResourceResource';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS } from '@lib/frontend/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { type TestableEntityResourceModel } from '@lib/shared/test/resources/TestableEntityResource/TestableEntityResource.models';
import { type TestableRelatedResourceModel } from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const TestableRelatedResourceTable: LFCModel<TestableRelatedResourceTablePropsModel> = ({
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useTestableRelatedResourceResource();
  return (
    <ResourceTable<TestableRelatedResourceModel, TestableEntityResourceModel>
      {...wrapperProps}
      {...TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
