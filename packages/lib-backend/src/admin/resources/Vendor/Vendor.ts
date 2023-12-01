import { Utility } from '#lib-backend/admin/resources/Utility/Utility';
import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { FIELD_RELATION } from '#lib-backend/resource/utils/withField/withField.constants';
import { UTILITY_RESOURCE_NAME } from '#lib-shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '#lib-shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '#lib-shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE, PROPERTY_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: VENDOR_RESOURCE_NAME })
export class Vendor extends EntityResource implements VendorModel {
  @withField({
    Resource: () => Utility,
    isArray: true,
    isOptional: true,
    isRepository: true,
    relation: FIELD_RELATION.ONE_TO_MANY,
    root: VENDOR_RESOURCE_NAME,
    type: PROPERTY_TYPE.RESOURCE,
  })
  [UTILITY_RESOURCE_NAME]?: Array<UtilityModel>;

  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${VENDOR_RESOURCE_NAME}Form` })
export class VendorForm implements VendorFormModel {}
