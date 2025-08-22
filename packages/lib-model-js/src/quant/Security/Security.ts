import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { Asset } from '@lib/model/quant/Asset/Asset';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';

@withEntity({ isAbstract: true, name: SECURITY_RESOURCE_NAME })
export class Security extends Asset implements SecurityModel {
  @withField({ isDatabase: true, isOptional: true })
  expiration?: DateTime;
}
