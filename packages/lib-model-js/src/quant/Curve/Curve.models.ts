import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { type DateTimeModel } from '@lib/shared/datetime/utils/DateTime/DateTime.models';

export type CurveModel = SourcedEntityResourceModel & {
  date: DateTimeModel;
  lastUpdated?: Date;
  name: string;
  /* eslint-disable @typescript-eslint/member-ordering */
  value_1mo?: number;
  value_2mo?: number;
  value_3mo?: number;
  value_4mo?: number;
  value_5mo?: number;
  value_6mo?: number;
  value_1yr?: number;
  value_2yr?: number;
  value_3yr?: number;
  value_5yr?: number;
  value_7yr?: number;
  value_10yr?: number;
  value_20yr?: number;
  value_30yr?: number;
  value_40yr?: number;
  /* eslint-enable @typescript-eslint/member-ordering */
};
