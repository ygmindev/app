import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type BooleanValueModel } from '@lib/model/resource/BooleanValue/BooleanValue.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isAbstract: true })
export class BooleanValue implements BooleanValueModel {
  @withField({ type: DATA_TYPE.BOOLEAN })
  value!: boolean;
}
