import { type UTILITY_TYPE } from '@lib/model/admin/Utility/Utility.constants';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type UtilityModel = EntityResourceModel & {
  description?: string;

  imageSrc?: string;

  name: string;

  pricing?: string;

  type: Array<UTILITY_TYPE>;

  url?: string;
};
