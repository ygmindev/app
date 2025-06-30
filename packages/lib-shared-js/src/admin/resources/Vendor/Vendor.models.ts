import { type UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  [UTILITY_RESOURCE_NAME]?: Array<UtilityModel>;

  imageSrc?: string;

  name: string;
};
