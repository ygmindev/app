import { type UtilityTablePropsModel } from '@lib/frontend/admin/containers/UtilityTable/UtilityTable.models';
import { useUtilityResource } from '@lib/frontend/admin/hooks/useUtilityResource/useUtilityResource';
import { UTILITY_RESOURCE_PARAMS } from '@lib/frontend/admin/resources/Utility/Utility.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';

export const UtilityTable: LFCModel<UtilityTablePropsModel> = ({ root, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useUtilityResource({ root });
  return (
    <ResourceTable<UtilityModel, VendorModel>
      {...wrapperProps}
      {...UTILITY_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
