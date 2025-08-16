import { type AssetModel } from '@lib/model/quant/Asset/Asset.models';
import { type DateTimeModel } from '@lib/shared/datetime/utils/DateTime/DateTime.models';

export type SecurityModel = AssetModel & {
  expiration?: DateTimeModel;
};
