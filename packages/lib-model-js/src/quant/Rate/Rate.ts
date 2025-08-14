import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { RATE_RESOURCE_NAME } from '@lib/model/quant/Rate/Rate.constants';
import { type RateModel } from '@lib/model/quant/Rate/Rate.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { Period } from '@lib/shared/datetime/utils/Period/Period';

@withEntity({
  isDatabase: true,
  name: RATE_RESOURCE_NAME,
})
export class Rate extends SourcedEntityResource implements RateModel {
  @withField({ type: DATA_TYPE.STRING })
  currency!: string;

  @withField({ isOptional: true, type: DATA_TYPE.DATE })
  maturity?: DateTime;

  @withField({ type: DATA_TYPE.STRING })
  name!: string;

  @withField({ Resource: () => Period, isOptional: true })
  tenor?: Period;
}
