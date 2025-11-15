import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEmbeddedField } from '@lib/backend/resource/utils/withEmbeddedField/withEmbeddedField';
import { UTILITY_RESOURCE_NAME } from '@lib/model/admin/Utility/Utility.constants';
import { Utility } from '@lib/model/admin/Utility/Utility.entity';
import { type UtilityModel } from '@lib/model/admin/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/model/admin/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/model/admin/Vendor/Vendor.models';
import { EntityResource } from '@lib/model/resource/EntityResource/EntityResource';
import { PartialArrayModel } from '@lib/shared/core/core.models';

@withDatabaseEntity({ name: VENDOR_RESOURCE_NAME })
export class Vendor extends EntityResource implements VendorModel {
  @withEmbeddedField({ Resource: () => Utility })
  [UTILITY_RESOURCE_NAME]?: PartialArrayModel<UtilityModel>;

  @withDatabaseField({ isOptional: true })
  imageSrc?: string;

  @withDatabaseField()
  name!: string;
}

export default Vendor;
