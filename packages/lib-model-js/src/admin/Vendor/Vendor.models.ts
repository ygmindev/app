import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { type CollectionModel } from '@lib/model/core/Collection/Collection.models';
import { type EntityResourceModel } from '@lib/model/core/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  imageSrc?: string;

  name: string;

  utilities?: CollectionModel<UtilityModel>;
};
