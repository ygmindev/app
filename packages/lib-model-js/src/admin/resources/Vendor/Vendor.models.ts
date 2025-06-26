import { type UtilityModel } from '@lib/model/admin/resources/Utility/Utility.models';
import { type EntityResourceModel } from '@lib/model/resource/resources/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  imageSrc?: string;

  name: string;

  utilities?: Array<UtilityModel>;

  utility?: UtilityModel;
};
