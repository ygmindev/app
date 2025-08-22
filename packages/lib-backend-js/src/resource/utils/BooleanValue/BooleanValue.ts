import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type BooleanValueModel } from '@lib/shared/resource/utils/BooleanValue/BooleanValue.models';

@withEntity({ isAbstract: true })
export class BooleanValue implements BooleanValueModel {
  @withField()
  value!: boolean;
}
