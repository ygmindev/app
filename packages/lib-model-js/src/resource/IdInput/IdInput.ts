import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { ID_INPUT } from '@lib/model/resource/IdInput/IdInput.constants';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';

@withEntity({ name: ID_INPUT })
export class IdInput implements IdInputModel {
  @withField()
  id!: string;
}
