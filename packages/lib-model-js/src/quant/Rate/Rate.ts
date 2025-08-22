import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { RATE_RESOURCE_NAME } from '@lib/model/quant/Rate/Rate.constants';
import { type RateModel } from '@lib/model/quant/Rate/Rate.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import { Period } from '@lib/shared/datetime/utils/Period/Period';

@withEntity({
  isDatabase: true,
  name: RATE_RESOURCE_NAME,
})
export class Rate extends SourcedEntityResource implements RateModel {
  @withField()
  currency!: string;

  @withField({ isOptional: true })
  maturity?: DateTime;

  @withField()
  name!: string;

  @withField({ Resource: () => Period, isOptional: true })
  tenor?: Period;
}
