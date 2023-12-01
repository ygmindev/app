import { VENDOR_TABLE_PROPS } from '#lib-frontend/admin/containers/VendorTable/VendorTable.constants';
import { type VendorTablePropsModel } from '#lib-frontend/admin/containers/VendorTable/VendorTable.models';
import { useVendorResource } from '#lib-frontend/admin/hooks/useVendorResource/useVendorResource';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { ResourceTable } from '#lib-frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type VendorFormModel,
  type VendorModel,
} from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const VendorTable: LFCModel<VendorTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const service = useVendorResource();
  return (
    <ResourceTable<VendorModel, VendorFormModel>
      {...wrapperProps}
      {...VENDOR_TABLE_PROPS}
      service={service}
    />
  );
};
