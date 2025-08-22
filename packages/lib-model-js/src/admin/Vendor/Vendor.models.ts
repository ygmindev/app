import { type UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';
import { type PartialArrayModel } from '@lib/shared/core/core.models';

export type VendorModel = EntityResourceModel & {
  [UTILITY_RESOURCE_NAME]?: PartialArrayModel<UtilityModel>;

  imageSrc?: string;

  name: string;
};
