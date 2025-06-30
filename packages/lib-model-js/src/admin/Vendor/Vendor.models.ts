import { type CollectionModel } from '@lib/backend/core/utils/Collection/Collection.models';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type EntityResourceModel } from '@lib/model/resource/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  imageSrc?: string;

  name: string;

  utilities?: CollectionModel<UtilityModel>;
};
