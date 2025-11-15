import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { ASSET_RESOURCE_NAME } from '@lib/model/quant/Asset/Asset.constants';
import { AssetModel } from '@lib/model/quant/Asset/Asset.models';

@withEntity({ isAbstract: true, name: ASSET_RESOURCE_NAME })
export class Asset extends SourcedEntityResource implements AssetModel {
  @withDatabaseField({ isOptional: true })
  description?: string;
}
