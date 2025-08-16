import { type RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { type ASSET_RESOURCE_NAME } from '@lib/model/quant/Asset/Asset.constants';
import { type FutureModel } from '@lib/model/quant/Future/Future.models';
import { type InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';

export type InterestRateFutureModel = FutureModel & {
  [ASSET_RESOURCE_NAME]: RefModel<InterestRateModel>;
};
