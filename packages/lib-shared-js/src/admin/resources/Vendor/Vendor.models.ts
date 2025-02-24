import { type RefFieldModel } from '@lib/backend/resource/utils/RefField/RefField.models';
import { type UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import {
  type EntityResourceDataModel,
  type EntityResourceModel,
} from '@lib/shared/resource/resources/EntityResource/EntityResource.models';

export type VendorModel = EntityResourceModel & {
  [UTILITY_RESOURCE_NAME]?: Array<RefFieldModel<UtilityModel>>;

  imageSrc?: string;

  name: string;
};

export type VendorFormModel = EntityResourceDataModel<VendorModel>;
