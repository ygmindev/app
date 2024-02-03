import { type LFCModel } from '@lib/frontend/core/core.models';
import { SPECIFICATION_TABLE_PROPS } from '@lib/frontend/openapi/containers/SpecificationTable/SpecificationTable.constants';
import { type SpecificationTablePropsModel } from '@lib/frontend/openapi/containers/SpecificationTable/SpecificationTable.models';
import { useSpecificationResource } from '@lib/frontend/openapi/hooks/useSpecificationResource/useSpecificationResource';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type SpecificationFormModel,
  type SpecificationModel,
} from '@lib/shared/openapi/resources/Specification/Specification.models';

export const SpecificationTable: LFCModel<SpecificationTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useSpecificationResource();
  return (
    <ResourceTable<SpecificationModel, SpecificationFormModel>
      {...wrapperProps}
      {...SPECIFICATION_TABLE_PROPS}
      implementation={implementation}
    />
  );
};
