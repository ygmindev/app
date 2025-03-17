import { type LFCModel } from '@lib/frontend/core/core.models';
import { type TestableRelatedResourceTablePropsModel } from '@lib/frontend/test/containers/TestableRelatedResourceTable/TestableRelatedResourceTable.models';
import { useTestableRelatedResourceResource } from '@lib/frontend/test/hooks/useTestableRelatedResourceResource/useTestableRelatedResourceResource';
import { TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS } from '@lib/frontend/test/resources/TestableRelatedResource/TestableRelatedResource.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type TestableRelatedResourceFormModel,
  type TestableRelatedResourceModel,
} from '@lib/shared/test/resources/TestableRelatedResource/TestableRelatedResource.models';

export const TestableRelatedResourceTable: LFCModel<TestableRelatedResourceTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useTestableRelatedResourceResource();
  return (
    <ResourceTable<TestableRelatedResourceModel, TestableRelatedResourceFormModel>
      {...wrapperProps}
      {...TESTABLE_RELATED_RESOURCE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
