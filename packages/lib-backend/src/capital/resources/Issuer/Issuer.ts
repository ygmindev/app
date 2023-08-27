import { EntityResource } from '#lib-backend/resource/resources/EntityResource/EntityResource';
import { withEntity } from '#lib-backend/resource/utils/withEntity/withEntity';
import { withField } from '#lib-backend/resource/utils/withField/withField';
import { ISSUER_RESOURCE_NAME } from '#lib-shared/capital/resources/Issuer/Issuer.constants';
import {
  type IssuerFormModel,
  type IssuerModel,
} from '#lib-shared/capital/resources/Issuer/Issuer.models';
import { FIELD_TYPE } from '#lib-shared/data/data.constants';

@withEntity({ isRepository: true, name: ISSUER_RESOURCE_NAME })
export class Issuer extends EntityResource implements IssuerModel {
  @withField({ isRepository: true, type: FIELD_TYPE.STRING })
  name!: string;
}

@withEntity({ name: `${ISSUER_RESOURCE_NAME}Form` })
export class IssuerForm implements IssuerFormModel {
  @withField({ type: FIELD_TYPE.STRING })
  name!: string;
}
