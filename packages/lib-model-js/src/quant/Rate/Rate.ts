import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { RATE_RESOURCE_NAME } from '@lib/model/quant/Rate/Rate.constants';
import { type RateModel } from '@lib/model/quant/Rate/Rate.models';
import { DateTimeModel } from '@lib/shared/datetime/utils/DateTime/DateTime.models';
import { Period } from '@lib/shared/datetime/utils/Period/Period';
import { PeriodModel } from '@lib/shared/datetime/utils/Period/Period.models';

@withDatabaseEntity({ name: RATE_RESOURCE_NAME })
export class Rate extends SourcedEntityResource implements RateModel {
  @withDatabaseField()
  currency!: string;

  @withDatabaseField({ isOptional: true })
  maturity?: DateTimeModel;

  @withDatabaseField()
  name!: string;

  @withDatabaseField({ Resource: () => Period, isOptional: true })
  tenor?: PeriodModel;
}
