import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { CURVE_RESOURCE_NAME } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

@withEntity({
  isDatabase: true,
  name: CURVE_RESOURCE_NAME,
})
export class Curve extends SourcedEntityResource implements CurveModel {
  @withField({ isDatabase: true, isUnique: true })
  date!: DateTime;

  @withField({ isDatabase: true, isOptional: true })
  lastUpdated?: Date;

  @withField({ isDatabase: true })
  name!: string;

  /* eslint-disable @typescript-eslint/member-ordering */
  @withField({ isDatabase: true, isOptional: true })
  value_1mo?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_2mo?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_3mo?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_4mo?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_5mo?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_6mo?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_1yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_2yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_3yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_5yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_7yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_10yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_20yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_30yr?: number;
  @withField({ isDatabase: true, isOptional: true })
  value_40yr?: number;
  /* eslint-enable @typescript-eslint/member-ordering */
}

export default Curve;
