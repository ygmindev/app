import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { DATA_TYPE } from '@lib/shared/data/data.constants';
import { ID_INPUT } from '@lib/shared/resource/utils/IdInput/IdInput.constants';
import { type IdInputModel } from '@lib/shared/resource/utils/IdInput/IdInput.models';

@withEntity({ name: ID_INPUT })
export class IdInput implements IdInputModel {
  @withField({ type: DATA_TYPE.STRING })
  id!: string;
}
