import { withDatabaseEntity } from '@lib/backend/resource/utils/withDatabaseEntity/withDatabaseEntity';
import { withDatabaseField } from '@lib/backend/resource/utils/withDatabaseField/withDatabaseField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { CURVE_RESOURCE_NAME } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

@withDatabaseEntity({
  name: CURVE_RESOURCE_NAME,
})
export class Curve extends SourcedEntityResource implements CurveModel {
  @withDatabaseField({ isUnique: true })
  date!: DateTime;

  @withDatabaseField({ isOptional: true })
  lastUpdated?: Date;

  @withDatabaseField()
  name!: string;

  /* eslint-disable @typescript-eslint/member-ordering */
  @withDatabaseField({ isOptional: true })
  value_1mo?: number;
  @withDatabaseField({ isOptional: true })
  value_2mo?: number;
  @withDatabaseField({ isOptional: true })
  value_3mo?: number;
  @withDatabaseField({ isOptional: true })
  value_4mo?: number;
  @withDatabaseField({ isOptional: true })
  value_5mo?: number;
  @withDatabaseField({ isOptional: true })
  value_6mo?: number;
  @withDatabaseField({ isOptional: true })
  value_1yr?: number;
  @withDatabaseField({ isOptional: true })
  value_2yr?: number;
  @withDatabaseField({ isOptional: true })
  value_3yr?: number;
  @withDatabaseField({ isOptional: true })
  value_5yr?: number;
  @withDatabaseField({ isOptional: true })
  value_7yr?: number;
  @withDatabaseField({ isOptional: true })
  value_10yr?: number;
  @withDatabaseField({ isOptional: true })
  value_20yr?: number;
  @withDatabaseField({ isOptional: true })
  value_30yr?: number;
  @withDatabaseField({ isOptional: true })
  value_40yr?: number;
  /* eslint-enable @typescript-eslint/member-ordering */
}

export default Curve;
