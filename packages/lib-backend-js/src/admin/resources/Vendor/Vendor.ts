import { Utility } from '@lib/backend/admin/resources/Utility/Utility';
import { EntityResource } from '@lib/backend/resource/resources/EntityResource/EntityResource';
import { Collection } from '@lib/backend/resource/utils/Collection/Collection';
import { CollectionModel } from '@lib/backend/resource/utils/Collection/Collection.models';
import { withEmbeddedResourceField } from '@lib/backend/resource/utils/withEmbeddedResourceField/withEmbeddedResourceField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { UTILITY_RESOURCE_NAME } from '@lib/shared/admin/resources/Utility/Utility.constants';
import { type UtilityModel } from '@lib/shared/admin/resources/Utility/Utility.models';
import { VENDOR_RESOURCE_NAME } from '@lib/shared/admin/resources/Vendor/Vendor.constants';
import { type VendorModel } from '@lib/shared/admin/resources/Vendor/Vendor.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isDatabase: true, name: VENDOR_RESOURCE_NAME })
export class Vendor extends EntityResource implements VendorModel {
  @withEmbeddedResourceField({ Resource: () => Utility, root: VENDOR_RESOURCE_NAME })
  [UTILITY_RESOURCE_NAME]?: CollectionModel<UtilityModel> = new Collection<
    UtilityModel,
    VendorModel
  >(this);

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  imageSrc?: string;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;
}
