import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { CURVE_RESOURCE_NAME } from '@lib/model/quant/Curve/Curve.constants';
import { type CurveModel } from '@lib/model/quant/Curve/Curve.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

@withEntity({
  isDatabase: true,
  name: CURVE_RESOURCE_NAME,
})
export class Curve extends SourcedEntityResource implements CurveModel {
  @withField({ isDatabase: true, isUnique: true, type: DATA_TYPE.DATE })
  date!: DateTime;

  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.DATE })
  lastUpdated?: Date;

  @withField({ isDatabase: true, type: DATA_TYPE.STRING })
  name!: string;

  /* eslint-disable @typescript-eslint/member-ordering */
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_1mo?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_2mo?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_3mo?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_4mo?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_5mo?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_6mo?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_1yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_2yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_3yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_5yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_7yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_10yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_20yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_30yr?: number;
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.NUMBER })
  value_40yr?: number;
  /* eslint-enable @typescript-eslint/member-ordering */
}
