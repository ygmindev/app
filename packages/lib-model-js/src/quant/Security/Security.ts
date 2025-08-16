import { withEntity } from '@lib/backend/resource/utils/withEntity/withEntity';
import { withField } from '@lib/backend/resource/utils/withField/withField';
import { SourcedEntityResource } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource';
import { SECURITY_RESOURCE_NAME } from '@lib/model/quant/Security/Security.constants';
import { type SecurityModel } from '@lib/model/quant/Security/Security.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

@withEntity({ isAbstract: true, name: SECURITY_RESOURCE_NAME })
export class Security extends SourcedEntityResource implements SecurityModel {
  @withField({ isDatabase: true, isOptional: true, type: DATA_TYPE.STRING })
  description?: string;
}
