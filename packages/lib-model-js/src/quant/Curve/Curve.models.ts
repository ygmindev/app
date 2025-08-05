import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';

export type CurveModel = SourcedEntityResourceModel & {
  date: Date;
  lastUpdated?: Date;
  value_10yr?: number;
  value_1mo?: number;
  value_1yr?: number;
  value_20yr?: number;
  value_2mo?: number;
  value_2yr?: number;
  value_30yr?: number;
  value_3mo?: number;
  value_3yr?: number;
  value_40yr?: number;
  value_4mo?: number;
  value_5yr?: number;
  value_6mo?: number;
  value_7yr?: number;
};
