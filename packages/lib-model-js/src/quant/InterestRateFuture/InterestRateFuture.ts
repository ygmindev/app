import { RefModel } from '@lib/backend/resource/utils/RefModel/RefModel.models';
import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withRefField } from '@lib/backend/resource/utils/withRefField/withRefField';
import { ASSET_RESOURCE_NAME } from '@lib/model/quant/Asset/Asset.constants';
import { Future } from '@lib/model/quant/Future/Future';
import InterestRate from '@lib/model/quant/InterestRate/InterestRate.entity';
import { InterestRateModel } from '@lib/model/quant/InterestRate/InterestRate.models';
import { INTEREST_RATE_FUTURE_RESOURCE_NAME } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.constants';
import { type InterestRateFutureModel } from '@lib/model/quant/InterestRateFuture/InterestRateFuture.models';

@withEntity({
  isDatabase: true,
  name: INTEREST_RATE_FUTURE_RESOURCE_NAME,
})
export class InterestRateFuture extends Future implements InterestRateFutureModel {
  @withRefField({ Resource: () => InterestRate })
  [ASSET_RESOURCE_NAME]!: RefModel<InterestRateModel>;
}

export default InterestRateFuture;
