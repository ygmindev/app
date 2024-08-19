import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { type IdArgsModel } from '@lib/shared/resource/utils/IdArgs/IdArgs.models';

@withEntity({ name: 'IdArgs' })
export class IdArgs implements IdArgsModel {
  @withField({ type: DATA_TYPE.STRING })
  id!: string;
}
