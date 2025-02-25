import { type CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { type UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  [UTILITY_RESOURCE_NAME]?: CollectionModel<UtilityModel>;

  imageSrc?: string;

  name: string;
};

export type VendorFormModel = EntityResourceDataModel<VendorModel>;
