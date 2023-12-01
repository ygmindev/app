import { type GraphQlQueryParamsFieldsModel } from '#lib-frontend/data/utils/graphQlQuery/graphQlQuery.models';
import { type UseResourceMethodParamsFieldsModel } from '#lib-frontend/resource/hooks/useResourceMethod/useResourceMethod.models';
import { type UtilityModel } from '#lib-shared/admin/resources/Utility/Utility.models';
import { type VendorModel } from '#lib-shared/admin/resources/Vendor/Vendor.models';
import { type ResourceMethodTypeCrudModel } from '#lib-shared/resource/resource.models';

export const UTILITY_FIELDS = [
  'name',
  'description',
  'type',
  'usage',
] satisfies GraphQlQueryParamsFieldsModel<UtilityModel>;

export const UTILITY_OUTPUT_FIELDS = [
  { result: UTILITY_FIELDS },
] satisfies UseResourceMethodParamsFieldsModel<
  ResourceMethodTypeCrudModel,
  UtilityModel,
  VendorModel
>;
