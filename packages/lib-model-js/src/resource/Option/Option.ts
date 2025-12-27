import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { OPTION } from '@lib/model/resource/Option/Option.constants';
import { OptionModel } from '@lib/model/resource/Option/Option.models';

@withEntity({ name: OPTION })
export class Option implements OptionModel {
  @withField()
  id!: string;

  @withField({ isOptional: true })
  label?: string;
}
