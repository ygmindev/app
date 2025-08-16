import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { ASSET_RESOURCE_NAME } from '@lib/model/quant/Asset/Asset.constants';
import { AssetModel } from '@lib/model/quant/Asset/Asset.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isAbstract: true, name: ASSET_RESOURCE_NAME })
export class Asset extends SourcedEntityResource implements AssetModel {
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  description?: string;
}
