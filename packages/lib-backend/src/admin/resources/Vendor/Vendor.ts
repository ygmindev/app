import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { VENDOR_RESOURCE_NAME } from '#lib-shared/admin/resources/Vendor/Vendor.constants';
import {
  type VendorFormModel,
  type VendorModel,
} from '#lib-shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: VENDOR_RESOURCE_NAME })
export class Vendor extends EntityResource implements VendorModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${VENDOR_RESOURCE_NAME}Form` })
export class VendorForm implements VendorFormModel {}
