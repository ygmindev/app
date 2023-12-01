import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';

export const VENDOR_FIELDS = [
  '_id',
] satisfies GraphQlQueryParamsFieldsModel<VendorModel>;
