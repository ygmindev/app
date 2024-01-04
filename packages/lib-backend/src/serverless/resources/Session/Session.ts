import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { type SessionModel } from '#lib-backend/serverless/resources/Session/Session.models';
import { DATA_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true })
export class Session extends EntityResource implements SessionModel {
  @withField({ isRepository: true, type: DATA_TYPE.STRING })
  id!: string;
}
