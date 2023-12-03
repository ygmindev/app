import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const VENDOR_FIELDS = [
  '_id',
  'name',
  { [UTILITY_RESOURCE_NAME]: ['name'] },
] satisfies GraphQlQueryParamsFieldsModel<VendorModel>;
