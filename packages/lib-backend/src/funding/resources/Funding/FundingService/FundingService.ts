import { Container } from '#lib-backend/core/utils/Container/Container';
import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { CreditRatingService } from '#lib-backend/funding/resources/CreditRating/CreditRatingService/CreditRatingService';
import { createEntityResourceService } from '#lib-backend/resource/utils/createEntityResourceService/createEntityResourceService';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { withInject } from '#lib-shared/core/utils/withInject/withInject';
import { FUNDING_RESOURCE_NAME } from '#lib-shared/funding/resources/Funding/Funding.constants';
import {
  type FundingFormModel,
  type FundingModel,
} from '#lib-shared/funding/resources/Funding/Funding.models';
import { type FundingServiceModel } from '#lib-shared/funding/resources/Funding/FundingService/FundingService.models';
import { type RESOURCE_METHOD_TYPE } from '#lib-shared/resource/resource.constants';
import { type InputModel } from '#lib-shared/resource/utils/Input/Input.models';
import { type OutputModel } from '#lib-shared/resource/utils/Output/Output.models';

@withContainer({ name: `${FUNDING_RESOURCE_NAME}Service` })
export class FundingService
  extends createEntityResourceService<FundingModel, FundingFormModel>({
    name: FUNDING_RESOURCE_NAME,
  })
  implements FundingServiceModel
{
  @withInject(CreditRatingService, { isLazy: true })
  protected _creditRatingService!: CreditRatingService;

  async create(
    input: InputModel<RESOURCE_METHOD_TYPE.CREATE, FundingModel, FundingFormModel>,
  ): Promise<OutputModel<RESOURCE_METHOD_TYPE.CREATE, FundingModel>> {
    const creditRatings = input.form.CreditRating;
    delete input.form.CreditRating;
    const output = await super.create(input);

    creditRatings &&
      (await sequence(
        creditRatings?.map(
          (form) => async () =>
            this._creditRatingService.create({ form, options: { isCommitted: true } }),
        ),
      ));

    await Container.get(Database, DATABASE_TYPE.MONGO).flush();

    return output;
  }
}
