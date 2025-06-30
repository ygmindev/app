import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  [UTILITY_RESOURCE_NAME]?: CollectionModel<UtilityModel>;

  imageSrc?: string;

  name: string;
};
