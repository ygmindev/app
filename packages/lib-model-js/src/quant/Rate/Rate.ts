import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type RateModel } from '@lib/model/quant/Rate/Rate.models';
import { type PeriodModel } from '@lib/shared/datetime/utils/Period/Period.models';

export class Rate implements RateModel {
  @withField({})
  currency: string;

  maturity?: Date;

  name: string;

  tenor?: PeriodModel;
}
