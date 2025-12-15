import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { type IdInputModel } from '@lib/model/resource/IdInput/IdInput.models';

@withEntity({ name: 'Id' })
export class IdInput implements IdInputModel {
  @withField()
  id!: string;
}
