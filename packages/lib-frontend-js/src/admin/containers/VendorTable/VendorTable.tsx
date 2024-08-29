import { type VendorTablePropsModel } from '@lib/frontend/admin/containers/VendorTable/VendorTable.models';
import { useVendorResource } from '@lib/frontend/admin/hooks/useVendorResource/useVendorResource';
import { VENDOR_RESOURCE_PARAMS } from '@lib/frontend/admin/resources/Vendor/Vendor.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type VendorFormModel,
  type VendorModel,
} from '@lib/shared/admin/resources/Vendor/Vendor.models';

export const VendorTable: LFCModel<VendorTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useVendorResource();
  return (
    <ResourceTable<VendorModel, VendorFormModel>
      {...wrapperProps}
      {...VENDOR_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
